const institutionAsset = name => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/institutions/${name}.svg`;

export default function Education() {
  return <section id="education" className="education-recognition" aria-labelledby="education-heading">
    <h2 id="education-heading" className="plain-section-title">Education &amp; Recognition</h2>
    <div className="credential-row">
      <span className="credential-dates">2023–2026</span>
      <div className="credential-body">
        <a className="credential-mark manchester-mark" href="https://www.manchester.ac.uk/" target="_blank" rel="noopener noreferrer" aria-label="The University of Manchester official website"><img src={institutionAsset('manchester')} alt="The University of Manchester logo" width="190" height="77" loading="lazy" /></a>
        <div className="credential-copy"><h3>University of Manchester</h3><p>BSc (Hons) Computer Science<br />First-Class Honours</p></div>
      </div>
    </div>
    <div className="credential-row">
      <span className="credential-dates">2021–2026</span>
      <div className="credential-body">
        <a className="credential-mark neom-mark" href="https://www.neom.com/en-us" target="_blank" rel="noopener noreferrer" aria-label="NEOM official website"><img src={institutionAsset('neom')} alt="NEOM logo" width="112" height="112" loading="lazy" /></a>
        <div className="credential-copy"><h3>NEOM International Scholarship Programme</h3><p>International Scholarship Recipient</p></div>
      </div>
    </div>
  </section>;
}
