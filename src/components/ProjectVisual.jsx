import { projectImages } from './project-images';

function ProjectImage({ file, alt, label, focus }) {
  const [width, height] = projectImages[file];
  const src = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/projects/${file}`;
  const image = <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={focus ? { width: `${width / focus.width * 100}%`, left: `${-focus.x / focus.width * 100}%`, top: `${-focus.y / focus.height * 100}%` } : undefined} />;
  return <figure className="asset-panel">
    <a href={src} target="_blank" rel="noopener noreferrer" title="Open original image" className={focus ? 'board-focus' : undefined} style={focus ? { aspectRatio: `${focus.width} / ${focus.height}` } : undefined}>{image}</a>
    {label && <figcaption>{label}</figcaption>}
  </figure>;
}

function NliVisual() {
  return <>
    <div className="example-copy"><p className="visual-note">Illustrative example</p>
      <dl><dt>Premise</dt><dd>Two people are sitting in a café talking.</dd><dt>Hypothesis</dt><dd>Two people are having a conversation.</dd></dl>
      <p className="example-label">Entailment (1)</p>
    </div>
    <div className="score-chart" role="img" aria-label="Development-set Macro-F1 from the project poster: SVM 0.6379, DeBERTa-v3-large 0.9187, on a zero-to-one scale.">
      <p>Macro-F1</p>
      <div className="score-row"><span>SVM</span><strong>0.6379</strong><div className="score-track"><i style={{ width: '63.79%' }} /></div></div>
      <div className="score-row"><span>DeBERTa-v3-large</span><strong>0.9187</strong><div className="score-track"><i style={{ width: '91.87%' }} /></div></div>
      <div className="chart-scale"><span>0</span><span>1</span></div>
    </div>
  </>;
}

function StereoVisual() {
  return <div className="stereo-composition">
    <div className="stereo-input"><h4>Stereo Pair</h4><div>
      <ProjectImage file="stereo/left.png" alt="Original left umbrella stereo input, extracted from Figure 2a of the coursework handout." />
      <ProjectImage file="stereo/right.png" alt="Original right umbrella stereo input." />
    </div></div>
    <div className="stereo-results">
      <ProjectImage file="stereo/disparity.png" alt="Genuine dense grayscale disparity output using 64 disparities and block size 13." label="Disparity Map" />
      <ProjectImage file="stereo/reconstruction.png" alt="Genuine dense umbrella point cloud, plotted on X, Z and Y axes." label="3D Reconstruction" />
    </div>
  </div>;
}

const genres = ['Comedy', 'Cult', 'Flashback', 'Historical', 'Revenge', 'Romantic', 'Sci-Fi', 'Violence'];
const pipelines = [
  { name: 'BiLSTM', className: 'pipeline-lstm', stages: ['Text Cleaning', 'Token IDs', 'Embedding', 'BiLSTM', 'Dropout', 'Classification Head'], note: 'Vocabulary-based token IDs' },
  { name: 'RoBERTa-base', className: 'pipeline-roberta', stages: ['RoBERTa Tokenizer', 'RoBERTa-base', 'Classification Head'], note: 'Token IDs + attention masks' },
  { name: 'DeBERTa-v3-large', className: 'pipeline-deberta', stages: ['DeBERTa Tokenizer', 'DeBERTa-v3-large', 'Classification Head'], note: 'Token IDs + attention masks' },
];
function MovieVisual() {
  return <div className="movie-research-graphic">
    <div className="architecture-caption"><span>Three alternative models</span><span className="movie-result"><strong>0.5979</strong> Best weighted F1</span></div>
    <div className="movie-architecture" aria-label="Three independent neural models for the same eight-label classification task, not an ensemble.">
      <div className="shared-input"><h4>Shared Input</h4><div><span>Movie Title</span><span>Plot Synopsis</span></div></div>
      <div className="model-pipelines">{pipelines.map(pipeline => <div className={`model-pipeline ${pipeline.className}`} key={pipeline.name}>
        <div className="pipeline-heading"><h4>{pipeline.name}</h4><span>{pipeline.note}</span></div>
        <ol className="pipeline-stages">{pipeline.stages.map(stage => <li key={stage}><span>{stage}</span></li>)}</ol>
        <div className="pipeline-output"><span>8 logits</span><i aria-hidden="true" /></div>
      </div>)}</div>
      <div className="genre-output"><h4>Multi-label Classification</h4><ul>{genres.map(genre => <li key={genre}><i aria-hidden="true" />{genre}</li>)}</ul></div>
    </div>
    <div className="architecture-methods"><span>Transformers: class-weighted BCE</span><span>Sigmoid</span><span>Per-genre thresholds</span></div>
  </div>;
}

function HexVisual() {
  return <>
    <div className="hex-sequence">
      <ProjectImage file="hex/start.png" alt="Actual Hex opening board before the first move. Open for the complete terminal screenshot." label="Start" focus={{ x: 20, y: 128, width: 540, height: 390 }} />
      <ProjectImage file="hex/midgame.png" alt="Actual Hex board after turn eight, with red and blue moves. Open for the complete terminal screenshot." label="Midgame" focus={{ x: 20, y: 88, width: 540, height: 380 }} />
      <ProjectImage file="hex/later-game.png" alt="Actual later Hex board from the same run. Open for the complete terminal screenshot." label="Later Game" focus={{ x: 20, y: 315, width: 550, height: 380 }} />
    </div>
    <p className="hex-result"><strong>94%</strong> win rate against baseline, 100 games</p>
  </>;
}

function EmployeeVisual() {
  return <><p className="visual-note">Conceptual interface</p><div className="employee-interface"><h4>Employee records</h4><div className="mock-search">Search by employee, department or role</div><div className="mock-table"><div><span>Employee</span><span>Department</span><span>Leave</span></div><div><span>Example A</span><span>Engineering</span><span>Pending</span></div><div><span>Example B</span><span>Operations</span><span>Approved</span></div></div><div className="mock-workflows"><span>Review leave requests</span><span>Payroll reports<br /><small>PDF / CSV export</small></span></div></div></>;
}

function BookingVisual() {
  return <>
    <div className="booking-screenshots">
      <ProjectImage file="booking/main-menu.png" alt="Genuine Wedding Planner terminal main menu, showing booking, availability, cancellation and earliest-slot actions." />
      <ProjectImage file="booking/hotel-booking.png" alt="Genuine Wedding Planner hotel booking prompt asking for a hotel slot ID." />
    </div>
    <svg className="booking-service-map" viewBox="0 0 440 120" role="img" aria-label="Client sends requests to hotel and band services, which return availability and booking responses.">
      <defs><marker id="booking-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#789daf" /></marker></defs>
      <g fill="none" stroke="#789daf"><rect x="156" y="6" width="128" height="32" /><rect x="10" y="82" width="160" height="30" /><rect x="270" y="82" width="160" height="30" /></g>
      <g fill="#f5f0e6" fontSize="12" textAnchor="middle"><text x="220" y="27">Client</text><text x="90" y="102">Hotel service</text><text x="350" y="102">Band service</text></g>
      <g fill="none" stroke="#789daf" strokeWidth="1" markerStart="url(#booking-arrow)" markerEnd="url(#booking-arrow)"><path d="M179 40L109 79" /><path d="M261 40L331 79" /></g>
    </svg>
  </>;
}

const visuals = { nli: NliVisual, stereo: StereoVisual, movies: MovieVisual, hex: HexVisual, employees: EmployeeVisual, booking: BookingVisual };
export default function ProjectVisual({ project }) {
  const Visual = visuals[project];
  return <figure className={`project-visual technical-visual technical-${project}`}><Visual /></figure>;
}
