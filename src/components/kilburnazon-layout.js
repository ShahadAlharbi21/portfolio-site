import { schemaTables, schemaRelationships } from './kilburnazon-schema';

export const canvas = { width: 9300, height: 3400 };
export const rowHeight = 60;
export const headerHeight = 40;
export const tableHeight = table => headerHeight + rowHeight * table.fields.length;
const step = 20;
const columns = canvas.width / step + 1;
const rows = canvas.height / step + 1;
const size = columns * rows;
const blocked = new Uint8Array(size);
const usage = new Uint16Array(size);
const key = (x, y) => y * columns + x;
for (const table of schemaTables) {
  for (let y = (table.y - step) / step; y <= (table.y + tableHeight(table) + step) / step; y++) {
    for (let x = (table.x - step) / step; x <= (table.x + table.width + step) / step; x++) blocked[key(x, y)] = 1;
  }
}
function push(heap, item) {
  heap.push(item);
  let i = heap.length - 1;
  while (i > 0) {
    const parent = (i - 1) >> 1;
    if (heap[parent][1] <= item[1]) break;
    heap[i] = heap[parent]; i = parent;
  }
  heap[i] = item;
}
function pop(heap) {
  const result = heap[0], last = heap.pop();
  if (!heap.length) return result;
  let i = 0;
  while (i * 2 + 1 < heap.length) {
    let child = i * 2 + 1;
    if (child + 1 < heap.length && heap[child + 1][1] < heap[child][1]) child++;
    if (heap[child][1] >= last[1]) break;
    heap[i] = heap[child]; i = child;
  }
  heap[i] = last;
  return result;
}
function route(start, end) {
  const sx = start.x / step, sy = start.y / step, ex = end.x / step, ey = end.y / step;
  const first = key(sx, sy), last = key(ex, ey);
  const costs = new Float64Array(size); costs.fill(Infinity); costs[first] = 0;
  const previous = new Int32Array(size); previous.fill(-1);
  const closed = new Uint8Array(size);
  const heap = []; push(heap, [first, Math.abs(ex-sx)+Math.abs(ey-sy)]);
  while (heap.length) {
    const [current] = pop(heap);
    if (closed[current]) continue;
    if (current === last) {
      const result = [];
      for (let at = last; at !== -1; at = previous[at]) { result.push({x:(at % columns)*step,y:Math.floor(at/columns)*step}); usage[at]++; }
      return result.reverse();
    }
    closed[current] = 1;
    const x = current % columns, y = Math.floor(current/columns);
    for (const [nx,ny] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]) {
      if (nx<1 || ny<1 || nx>=columns-1 || ny>=rows-1) continue;
      const next = key(nx,ny);
      if (blocked[next] || closed[next]) continue;
      const prior = previous[current];
      const turning = prior !== -1 && ((current-prior) !== (next-current));
      const cost = costs[current] + 1 + usage[next] * 0.65 + (turning ? .2 : 0);
      if (cost >= costs[next]) continue;
      costs[next] = cost; previous[next] = current;
      push(heap,[next,cost+Math.abs(ex-nx)+Math.abs(ey-ny)]);
    }
  }
  throw new Error('Unable to route schema relationship');
}
function simplify(points) {
  return points.filter((point,i) => i===0 || i===points.length-1 || !((points[i-1].x===point.x && point.x===points[i+1].x) || (points[i-1].y===point.y && point.y===points[i+1].y)));
}
const occupiedPorts = new Map();
function port(table, field, side) {
  const index = table.fields.findIndex(item => item.name === field);
  const desired = table.y + (index < 0 ? 20 : headerHeight + index * rowHeight + 40);
  const portKey = table.name + ':' + side;
  const used = occupiedPorts.get(portKey) || new Set();
  for (let distance = 0; distance < tableHeight(table); distance += step) {
    for (const offset of distance ? [distance, -distance] : [0]) {
      const y = desired + offset;
      if (y < table.y + 20 || y > table.y + tableHeight(table) - 20 || used.has(y)) continue;
      used.add(y); occupiedPorts.set(portKey, used);
      return { x: table.x + (side === 1 ? table.width : 0), y, side };
    }
  }
  throw new Error('No free endpoint on ' + table.name);
}
const labels = [];
const intersects = (a,b) => a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y;
function placeLabel(points, label, relationshipIndex) {
  const width = label.length * 7 + 18;
  const segments = points.slice(1).map((b,i) => ({a:points[i],b,length:Math.abs(b.x-points[i].x)+Math.abs(b.y-points[i].y)})).sort((a,b)=>b.length-a.length);
  for (const segment of segments) {

    const vertical = segment.a.x === segment.b.x;
    for (const fraction of [.5,.25,.75,.125,.875]) for (const offset of [0,16,-16,28,-28,40,-40]) {
      const x = segment.a.x+(segment.b.x-segment.a.x)*fraction+(vertical?offset:0);
      const y = segment.a.y+(segment.b.y-segment.a.y)*fraction+(vertical?0:offset);
      const box = {x:x-(vertical?10:width/2),y:y-(vertical?width/2:10),w:vertical?20:width,h:vertical?width:20};
      if (schemaTables.some(t=>intersects(box,{x:t.x-5,y:t.y-5,w:t.width+10,h:tableHeight(t)+10})) || labels.some(b=>intersects(box,b))) continue;
      const touchesOtherLine = routedRelationships.some((relationship, index) => index !== relationshipIndex && relationship.points.slice(1).some((b, i) => {
        const a = relationship.points[i];
        return a.y === b.y
          ? a.y >= box.y - 3 && a.y <= box.y + box.h + 3 && Math.max(a.x,b.x) >= box.x - 3 && Math.min(a.x,b.x) <= box.x + box.w + 3
          : a.x >= box.x - 3 && a.x <= box.x + box.w + 3 && Math.max(a.y,b.y) >= box.y - 3 && Math.min(a.y,b.y) <= box.y + box.h + 3;
      }));
      const touchesMarker = routedRelationships.some(relationship => [relationship.start,relationship.end].some(point => intersects(box,{x:point.x+(point.side===1?0:-30),y:point.y-12,w:30,h:24})));
      if (touchesOtherLine || touchesMarker) continue;
      labels.push(box); return {x,y,width,vertical};
    }
  }
  throw new Error('Unable to place schema label: '+label+' '+JSON.stringify(points));
}
const routedRelationships = schemaRelationships.map((relation,index) => {
  const parent = schemaTables.find(t=>t.name===relation.parent), child = schemaTables.find(t=>t.name===relation.child);
  const direction = parent.x < child.x ? 1 : parent.x > child.x ? -1 : index % 2 ? 1 : -1;
  const start = port(parent,relation.parentColumn,direction), end = port(child,relation.column,parent.x===child.x?direction:-direction);
  const startLead = {x:start.x+start.side*40,y:start.y}, endLead = {x:end.x+end.side*40,y:end.y};
  const points = simplify([start,...route(startLead,endLead),end]);
  return {...relation,start,end,points,path:points.map((p,i)=>(i?'L':'M')+p.x+' '+p.y).join(' ')};
});

export const diagramRelationships = routedRelationships.map((relationship,index) => ({...relationship,labelPosition:relationship.label ? placeLabel(relationship.points,relationship.label,index) : null}));
