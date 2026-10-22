function NliVisual() {
  return <>
    <div className="example-copy"><p className="visual-note">Illustrative example</p><dl><dt>Premise</dt><dd>A person is playing a violin.</dd><dt>Hypothesis</dt><dd>A person is playing an instrument.</dd></dl><p className="example-label">Relationship: entailment</p><p className="visual-note">Semantic example, not a model prediction.</p></div>
    <div className="score-chart" role="img" aria-label="Verified Macro-F1: SVM 0.6379, DeBERTa-v3-large 0.9187. Scale from zero to one."><p>Verified Macro-F1</p><div className="score-row"><span>SVM</span><strong>0.6379</strong><div className="score-track"><i style={{width:'63.79%'}} /></div></div><div className="score-row"><span>DeBERTa-v3-large</span><strong>0.9187</strong><div className="score-track"><i style={{width:'91.87%'}} /></div></div><div className="chart-scale"><span>0</span><span>1</span></div></div>
  </>;
}
function StereoVisual() {
  return <><p className="visual-note">Conceptual pipeline, not project output</p>
    <svg viewBox="0 0 440 290" role="img" aria-label="Rectified left and right image schematics with a horizontal object shift, followed by a conceptual disparity map and reconstructed point cloud.">
      <defs><marker id="stereo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#e7b66d" /></marker></defs>
      <g fill="none" stroke="#789daf"><rect x="20" y="35" width="180" height="72"/><rect x="240" y="35" width="180" height="72"/><path d="M20 77H420" strokeDasharray="4 4"/></g>
      <g fill="#ed8d83"><rect x="115" y="55" width="32" height="43"/><rect x="305" y="55" width="32" height="43"/></g>
      <g fill="#f5f0e6" fontSize="11"><text x="20" y="23">Left view</text><text x="240" y="23">Right view</text><text x="20" y="154">Disparity map (schematic)</text><text x="240" y="154">3D point cloud (schematic)</text></g>
      <path d="M110 114V135M330 114V135" stroke="#e7b66d" markerEnd="url(#stereo-arrow)"/>
      <rect x="20" y="167" width="180" height="91" fill="#343f68"/><rect x="80" y="167" width="45" height="91" fill="#789daf"/><rect x="115" y="188" width="32" height="43" fill="#ed8d83"/>
      {Array.from({length:120},(_,i)=>{const x=i%15,y=Math.floor(i/15);return <circle key={i} cx={247+x*9+y*4} cy={247-y*7-Math.sin(x*.22)*y*3} r="1.7" fill={y>3?'#ed8d83':'#789daf'}/>;})}
      <text x="20" y="280" fill="#e7b66d" fontSize="11">Horizontal disparity provides depth for reconstruction.</text>
    </svg></>;
}
function MovieVisual() {
  return <><p className="visual-note">Illustrative synopsis and labels</p><blockquote>A detective investigates a disappearance while confronting a family secret.</blockquote><div className="synopsis-labels"><span>Crime</span><span>Mystery</span><span>Drama</span></div><p className="visual-note">Example labels, not model predictions.</p><div className="verified-result"><strong>0.5979</strong><span>Best weighted F1 on unseen data</span></div></>;
}
function HexVisual() {
  const cells = Array.from({length:25},(_,i)=>({q:i%5,r:Math.floor(i/5)}));
  const center = (q,r)=>[55+Math.sqrt(3)*21*(q+r/2),43+31.5*r];
  return <><p className="visual-note">Illustrative valid Hex connection</p>
    <svg viewBox="0 0 340 245" role="img" aria-label="A five by five Hex board. Coral stones form a connected path across row three from the left edge to the right edge.">
      {cells.map(({q,r})=>{const [x,y]=center(q,r);const points=Array.from({length:6},(_,n)=>{const a=(30+60*n)*Math.PI/180;return `${x+21*Math.cos(a)},${y+21*Math.sin(a)}`;}).join(' '); const blue=(r===0&&q===1)||(r===1&&q===3)||(r===3&&q===0)||(r===4&&q===2);return <g key={`${q}-${r}`}><polygon points={points} fill="#244b49" stroke="#789daf" strokeWidth="1"/>{(r===2||blue)&&<circle cx={x} cy={y} r="13" fill={r===2?'#ed8d83':'#789daf'}/>}</g>;})}
      <path d={`M${center(0,2).join(' ')}L${center(4,2).join(' ')}`} stroke="#e7b66d" strokeWidth="2" strokeDasharray="3 3"/>
      <g fill="#ed8d83" fontSize="11"><text x="38" y="120" textAnchor="end">Left</text><text x="290" y="120">Right</text></g>
      <text x="170" y="215" fill="#f5f0e6" fontSize="11" textAnchor="middle">Coral connects its two opposite sides.</text>
    </svg><div className="verified-result"><strong>94%</strong><span>Win rate across 100 games against the baseline</span></div></>;
}
function EmployeeVisual() {
  return <><p className="visual-note">Conceptual interface, not an application screenshot</p><div className="employee-interface"><h4>Employee records</h4><div className="mock-search">Search by employee, department or role</div><div className="mock-table"><div><span>Employee</span><span>Department</span><span>Leave</span></div><div><span>Example A</span><span>Engineering</span><span>Pending</span></div><div><span>Example B</span><span>Operations</span><span>Approved</span></div></div><div className="mock-workflows"><span>Review leave requests</span><span>Payroll reports<br/><small>PDF / CSV export</small></span></div></div><p className="visual-note">Illustrative employee data.</p></>;
}
function BookingVisual() {
  return <><p className="visual-note">Architecture diagram</p><svg viewBox="0 0 440 310" role="img" aria-label="Client exchanges availability, reservation and cancellation requests with hotel and band REST API services. Client validates responses, handles retries and rate limiting, and matches the earliest shared slot.">
    <defs><marker id="booking-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#e7b66d"/></marker></defs>
    <g fill="#244b49" stroke="#789daf"><rect x="120" y="15" width="200" height="56" rx="2"/><rect x="15" y="178" width="175" height="47" rx="2"/><rect x="250" y="178" width="175" height="47" rx="2"/></g>
    <g fill="#f5f0e6" fontSize="13" textAnchor="middle"><text x="220" y="39">Python client</text><text x="220" y="57" fontSize="10">Earliest shared-slot matching</text><text x="102" y="206">Hotel service</text><text x="338" y="206">Band service</text></g>
    <g fill="none" stroke="#e7b66d" markerEnd="url(#booking-arrow)"><path d="M160 71L75 177"/><path d="M280 71L365 177"/><path d="M110 177L190 72"/><path d="M330 177L250 72"/></g>
    <g fill="#f5f0e6" fontSize="10"><text x="20" y="104">Booking requests</text><text x="319" y="104">Booking requests</text><text x="145" y="145">Responses</text><text x="242" y="145">Responses</text></g>
    <g fill="#e7b66d" fontSize="11" textAnchor="middle"><text x="220" y="250">REST APIs: availability, reserve, cancel</text><text x="220" y="273">Client: validation, retries and rate limiting</text><text x="220" y="293">Handle service failures and invalid responses</text></g>
  </svg></>;
}
const visuals = { nli: NliVisual, stereo: StereoVisual, movies: MovieVisual, hex: HexVisual, employees: EmployeeVisual, booking: BookingVisual };
export default function ProjectVisual({ project }) {
  const Visual = visuals[project];
  return <figure className={`project-visual technical-visual technical-${project}`}><Visual /></figure>;
}
