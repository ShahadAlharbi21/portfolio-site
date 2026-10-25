import { useEffect, useRef, useState } from 'react';
import { schemaTables } from './kilburnazon-schema';
import { canvas, diagramRelationships, headerHeight, rowHeight, tableHeight } from './kilburnazon-layout';
import styles from './Kilburnazon.module.css';

function wrap(text, length = 44) {
  const lines = []; let line = '';
  for (const word of text.split(' ')) {
    if (line && (line + ' ' + word).length > length) { lines.push(line); line = word; }
    else line += (line ? ' ' : '') + word;
  }
  if (line) lines.push(line);
  return lines;
}
export function Endpoint({ point, toward, multiplicity, table }) {
  const angle = Math.atan2(toward.y - point.y, toward.x - point.x) * 180 / Math.PI;
  const many = multiplicity.endsWith('<');
  const optional = multiplicity.startsWith('o');
  return <g transform={'translate(' + point.x + ' ' + point.y + ') rotate(' + angle + ')'} className={styles.endpoint} data-endpoint={multiplicity} data-endpoint-table={table} data-orientation={angle}>
    {many ? <>
      <path d="M0 -8L13 0M0 0H13M0 8L13 0" data-symbol="crow-foot" />
      {optional ? <circle cx="22" cy="0" r="5" data-symbol="circle" /> : <path d="M22 -8V8" data-symbol="bar" />}
    </> : <>
      <path d="M7 -8V8" data-symbol="bar" />
      {optional ? <circle cx="21" cy="0" r="5" data-symbol="circle" /> : <path d="M15 -8V8" data-symbol="bar" />}
    </>}
  </g>;
}
function SchemaDrawing() {
  return <g>
    <g>{diagramRelationships.map((r,i) => <g key={i} data-relationship={r.parent+'.'+r.parentColumn+'-'+r.child+'.'+r.column}>
      <path d={r.path} className={styles.relationship} />
      <Endpoint point={r.start} toward={r.points[1]} multiplicity={r.parentMultiplicity} table={r.parent} /><Endpoint point={r.end} toward={r.points[r.points.length - 2]} multiplicity={r.childMultiplicity} table={r.child} />
      {r.label && <g className={styles.relationshipLabel} transform={'translate('+r.labelPosition.x+' '+r.labelPosition.y+')'+(r.labelPosition.vertical?' rotate(-90)':'')}>
        <rect x={-r.labelPosition.width/2} y="-10" width={r.labelPosition.width} height="20" /><text textAnchor="middle" dominantBaseline="central">{r.label}</text>
      </g>}
    </g>)}</g>
    <g>{schemaTables.map(table => <g key={table.name} data-schema-table={table.name} transform={'translate('+table.x+' '+table.y+')'} className={styles.entity}>
      <rect width={table.width} height={tableHeight(table)} className={styles.tableBody} />
      <rect width={table.width} height={headerHeight} className={styles.tableHeader} />
      <text x="16" y="27" className={styles.tableName}>{table.name}</text>
      <path d={'M50 '+headerHeight+'V'+tableHeight(table)+'M306 '+headerHeight+'V'+tableHeight(table)} className={styles.rowRule} />
      {table.fields.map((field,index) => <g key={field.name} transform={'translate(0 '+(headerHeight+index*rowHeight)+')'} data-schema-field={table.name+'.'+field.name}>
        <title>{field.name+': '+field.definition}</title>
        <path d={'M0 '+rowHeight+'H'+table.width} className={styles.rowRule} />
        <text x="62" y="26" className={styles.fieldName + (field.key === 'PK' ? ' ' + styles.primaryKey : '')}>{field.name}</text>
        <text x="12" y="26" className={styles.keyFlags}>{field.key}</text>
        <text x="320" y="26" className={styles.fieldDefinition}>{wrap(field.definition).map((line,i)=><tspan key={i} x="320" dy={i?19:0}>{line}</tspan>)}</text>
      </g>)}
    </g>)}</g>
  </g>;
}
const readableScale = 1.3;
function readableView(table, viewportWidth = 0) {
  const left = Math.max(24, (viewportWidth - table.width * readableScale) / 2);
  return { x: left - table.x * readableScale, y: 24 - table.y * readableScale, scale: readableScale };
}
const employeesTable = schemaTables.find(table => table.name === 'Employees');

export default function KilburnazonSchema({ dialogRef }) {
  const viewport = useRef(null), gesture = useRef(null);
  const [view,setView] = useState(() => readableView(employeesTable));
  const [expanded,setExpanded] = useState(false);
  function reset() {
    setView(readableView(employeesTable, viewport.current?.clientWidth));
  }
  async function fullscreen() {
    if (expanded) {
      if (document.fullscreenElement) await document.exitFullscreen();
      setExpanded(false);
      return;
    }
    setExpanded(true);
    try { await viewport.current.closest('[data-schema-shell]').requestFullscreen(); }
    catch { /* The expanded dialog provides a fullscreen fallback. */ }
  }
  function close() {
    if (document.fullscreenElement) document.exitFullscreen();
    dialogRef.current.close();
  }
  function fit() {
    const box = viewport.current?.getBoundingClientRect();
    if (!box?.width || !box.height) return;
    const scale = Math.min((box.width-24)/canvas.width,(box.height-24)/canvas.height);
    setView({x:(box.width-canvas.width*scale)/2,y:(box.height-canvas.height*scale)/2,scale});
  }
  useEffect(() => {
    const dialog = dialogRef.current, area = viewport.current;
    let previousOverflow;
    function fullscreenChange() { if (!document.fullscreenElement) setExpanded(false); }
    document.addEventListener('fullscreenchange', fullscreenChange);
    function toggle() {
      if (dialog.open) { previousOverflow=document.body.style.overflow; document.body.style.overflow='hidden'; setView(readableView(employeesTable, area.clientWidth)); }
      else { document.body.style.overflow=previousOverflow ?? ''; gesture.current=null; }
    }
    dialog.addEventListener('toggle',toggle);
    return () => { document.removeEventListener('fullscreenchange',fullscreenChange); dialog.removeEventListener('toggle',toggle); if (previousOverflow!==undefined) document.body.style.overflow=previousOverflow; };
  },[dialogRef]);
  function zoom(factor,point) {
    const box=viewport.current.getBoundingClientRect();
    const focus=point ?? {x:box.width/2,y:box.height/2};
    setView(current=>{
      const minimum=Math.min(box.width/canvas.width,box.height/canvas.height)*.5;
      const scale=Math.max(minimum,Math.min(3,current.scale*factor)), ratio=scale/current.scale;
      return {scale,x:focus.x-(focus.x-current.x)*ratio,y:focus.y-(focus.y-current.y)*ratio};
    });
  }
  function pointerDown(event) {
    if (event.button!==0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    gesture.current={id:event.pointerId,x:event.clientX,y:event.clientY};
  }
  function pointerMove(event) {
    const start=gesture.current;
    if (!start || start.id!==event.pointerId) return;
    const dx=event.clientX-start.x,dy=event.clientY-start.y;
    setView(current=>({...current,x:current.x+dx,y:current.y+dy}));
    gesture.current={id:event.pointerId,x:event.clientX,y:event.clientY};
  }
  function keyDown(event) {
    if (event.key==='+' || event.key==='=') {event.preventDefault(); zoom(1.4);}
    else if (event.key==='-') {event.preventDefault(); zoom(1/1.4);}
    else if (event.key==='0') {event.preventDefault();reset();}
    else if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) {
      event.preventDefault(); setView(current=>({...current,x:current.x+(event.key==='ArrowLeft'?70:event.key==='ArrowRight'?-70:0),y:current.y+(event.key==='ArrowUp'?70:event.key==='ArrowDown'?-70:0)}));
    }
  }
  function focusTable(name) {
    const table=schemaTables.find(item=>item.name===name),box=viewport.current.getBoundingClientRect();
    if (!table) return;
    setView(readableView(table, box.width));
  }
  return <dialog ref={dialogRef} id="kilburnazon-schema" className={styles.schemaDialog+' '+(expanded?styles.expanded:'')} aria-labelledby="kilburnazon-schema-heading">
    <div className={styles.schemaShell} data-schema-shell="true">
      <div className={styles.toolbar}><h3 id="kilburnazon-schema-heading">Kilburnazon Database Schema</h3><button type="button" onClick={close}>Back to portfolio</button></div>
      <div className={styles.schemaControls} aria-label="Diagram controls">
        <button type="button" aria-label="Zoom in" onClick={()=>zoom(1.5)}>Zoom in</button><button type="button" aria-label="Zoom out" onClick={()=>zoom(1/1.5)}>Zoom out</button>
        <button type="button" onClick={fit}>Fit Entire Schema</button><button type="button" onClick={reset}>Reset View</button>
        <button type="button" aria-pressed={expanded} onClick={fullscreen}>{expanded?'Exit Fullscreen':'Fullscreen'}</button>
        <label className={styles.tablePicker}>Jump to table <select defaultValue="" onChange={event=>{focusTable(event.target.value);event.target.value='';}}><option value="" disabled>Choose a table</option>{schemaTables.map(table=><option key={table.name} value={table.name}>{table.name}</option>)}</select></label>
        <output aria-label="Zoom level">{Math.round(view.scale*100)}%</output>
      </div>
      <div ref={viewport} className={styles.schemaViewport} role="region" aria-label="Interactive database diagram" tabIndex="0" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={()=>{gesture.current=null;}} onPointerCancel={()=>{gesture.current=null;}} onKeyDown={keyDown} onDoubleClick={event=>{const box=viewport.current.getBoundingClientRect();zoom(1.5,{x:event.clientX-box.left,y:event.clientY-box.top});}}>
        <svg className={styles.diagram} aria-label="Kilburnazon entity relationship diagram with all 32 tables" width="100%" height="100%"><g transform={'translate('+view.x+' '+view.y+') scale('+view.scale+')'}><SchemaDrawing /></g></svg>
      </div>
    </div>
  </dialog>;
}
