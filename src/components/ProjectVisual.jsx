import ProjectGallery from './ProjectGallery';
import galleryStyles from './Kilburnazon.module.css';
import KilburnazonGallery from './KilburnazonGallery';
import { useRef } from 'react';
import { projectImages } from './project-images';

function ProjectImage({ file, alt, label }) {
  const viewer = useRef(null);
  const [width, height] = projectImages[file];
  const src = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/projects/${file}`;
  return <figure className="asset-panel">
    <a href={src} target="_blank" rel="noopener noreferrer" title="View at original resolution" onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); viewer.current.showModal(); }}><img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" /></a>
    {label && <figcaption>{label}</figcaption>}
    <dialog ref={viewer} className="image-viewer" aria-label="Project image at original resolution" onClick={event => { if (event.target === viewer.current) viewer.current.close(); }}>
      <div className="image-viewer-toolbar"><a href={src} target="_blank" rel="noopener noreferrer">Open original image</a><button type="button" onClick={() => viewer.current.close()} aria-label="Close image viewer">Close</button></div>
      <div className="image-viewer-content"><img className="image-viewer-image" src={src} alt={alt} width={width} height={height} loading="lazy" /></div>
    </dialog>
  </figure>;
}

function NliVisual() {
  return <div className="semantic-nli">
    <p className="visual-note nli-example-note">Illustrative example, not a model prediction</p>
    <div className="nli-sentences">
      <div className="nli-sentence"><h4>Premise</h4><p>Two people are sitting in a café <span>talking</span>.</p></div>
      <div className="nli-sentence"><h4>Hypothesis</h4><p>Two people are <span>having a conversation</span>.</p></div>
    </div>
    <div className="nli-prediction">
      <h4>Prediction</h4>
      <div className="nli-classes" aria-label="Binary classes; illustrative prediction: Entails (1)"><strong>Entails (1)</strong><span>Does Not Entail (0)</span></div>
    </div>
    <div className="nli-results"><p>Model comparison <span>Macro-F1</span></p><dl><div><dt>SVM</dt><dd>0.6379</dd></div><div><dt>DeBERTa-v3-large</dt><dd>0.9187</dd></div></dl></div>
  </div>;
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
const architectures = [
  { name: 'BiLSTM', type: 'recurrent', stages: ['Tokenisation', 'Embedding', 'Bidirectional LSTM', 'Classification Head'] },
  { name: 'RoBERTa-base', type: 'roberta', stages: ['RoBERTa Tokenizer', 'RoBERTa-base', 'Classification Head'] },
  { name: 'DeBERTa-v3-large', type: 'deberta', stages: ['DeBERTa Tokenizer', 'DeBERTa-v3-large', 'Classification Head'] },
];
function MovieVisual() {
  return <div className="compact-neural">
    <div className="neural-input"><span>Movie Title</span><b aria-hidden="true">+</b><span>Plot Synopsis</span></div>
    <p className="visual-note neural-alternatives">Three alternative architectures</p>
    <div className="neural-tracks">{architectures.map(model => <div className={`neural-track neural-${model.type}`} key={model.name}>
      <div className="neural-track-heading"><h4>{model.name}</h4>
        {model.type === 'recurrent' ? <svg viewBox="0 0 100 26" role="img" aria-label="Forward and backward sequence processing"><path d="M5 6H94L88 1M94 6L88 11M95 20H6L12 15M6 20L12 25" /></svg> : <svg viewBox="0 0 100 26" role="img" aria-label="Transformer encoder layers"><path d="M10 3H90V9H10ZM17 11H83V17H17ZM24 19H76V25H24Z" /></svg>}
      </div>
      <ol className="neural-stages">{model.stages.map(stage => <li key={stage}>{stage}</li>)}</ol>
    </div>)}</div>
    <div className="neural-output"><div><span>8 movie genres</span><div className="genre-indicators" aria-label={genres.join(', ')}>{genres.map(genre => <i key={genre} title={genre} aria-hidden="true" />)}</div></div><p><strong>0.5979</strong><span>Best weighted F1</span></p></div>
  </div>;
}

const hexImages = [
  { file: 'hex/start.png', caption: 'Start', alt: 'Complete original terminal screenshot of the Hex opening board and first move, including command, headings and coordinates.' },
  { file: 'hex/midgame.png', caption: 'Midgame', alt: 'Complete original terminal screenshot of Hex turns eight and nine with all board coordinates and log text.' },
  { file: 'hex/later-game.png', caption: 'Later Game', alt: 'Complete original terminal screenshot of the later Hex game state, final board and game log.' },
].map(image => ({ ...image, width: projectImages[image.file][0], height: projectImages[image.file][1] }));

function HexVisual() {
  return <ProjectGallery images={hexImages} label="Hex AI Agent screenshots" className={galleryStyles.hexGallery} />;
}

function EmployeeVisual() {
  return <KilburnazonGallery />;
}

function BookingVisual() {
  return <>
    <svg className="booking-architecture" viewBox="0 0 440 300" role="img" aria-label="Client at top communicates with Hotel Service and Band Service. For each service a straight coral request arrow points from client to service, and a separate straight blue response arrow points from service to client.">
      <defs>
        <marker id="request-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#ed8d83" /></marker>
        <marker id="response-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#9fbfd1" /></marker>
      </defs>
      <g className="service-nodes"><rect x="145" y="15" width="150" height="65" rx="3" /><rect x="5" y="225" width="195" height="65" rx="3" /><rect x="240" y="225" width="195" height="65" rx="3" /></g>
      <g className="service-icons"><path d="M164 35L171 41L164 47M176 47H187" /><path d="M22 269V245H44V269M18 269H48M28 250H31M36 250H39M28 257H31M36 257H39" /><path d="M264 266V244L281 240V262M264 247L281 243M264 265C256 260 253 271 260 270M281 261C273 256 270 267 277 266" /></g>
      <g fill="#f5f0e6" fontSize="18" textAnchor="middle"><text x="232" y="55">Client</text><text x="118" y="263">Hotel Service</text><text x="348" y="263">Band Service</text></g>
      <g fill="none" strokeWidth="1.5">
        <line data-direction="request" x1="174" y1="82" x2="55" y2="222" stroke="#ed8d83" markerEnd="url(#request-arrow)" />
        <line data-direction="response" x1="95" y1="222" x2="214" y2="82" stroke="#9fbfd1" markerEnd="url(#response-arrow)" />
        <line data-direction="request" x1="266" y1="82" x2="385" y2="222" stroke="#ed8d83" markerEnd="url(#request-arrow)" />
        <line data-direction="response" x1="345" y1="222" x2="226" y2="82" stroke="#9fbfd1" markerEnd="url(#response-arrow)" />
      </g>
      <g fontSize="15"><text x="48" y="146" fill="#ed8d83">Request</text><text x="153" y="174" fontSize="14" fill="#9fbfd1">Response</text><text x="330" y="146" fill="#ed8d83">Request</text><text x="287" y="174" fontSize="14" textAnchor="end" fill="#9fbfd1">Response</text></g>
    </svg>
    <div className="booking-support">
      <ProjectImage file="booking/main-menu.png" alt="Genuine Wedding Planner main menu, with booking and availability actions." />
      <ProjectImage file="booking/hotel-booking.png" alt="Genuine Wedding Planner hotel reservation prompt." />
    </div>
  </>;
}

const visuals = { nli: NliVisual, stereo: StereoVisual, movies: MovieVisual, hex: HexVisual, employees: EmployeeVisual, booking: BookingVisual };
export default function ProjectVisual({ project }) {
  const Visual = visuals[project];
  return <figure className={`project-visual technical-visual technical-${project}`}><Visual /></figure>;
}
