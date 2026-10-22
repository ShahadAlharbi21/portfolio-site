import { useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Retain links shared before the page was consolidated.
    const legacy = { '/about': 'about', '/projects': 'projects', '/certificates': 'certificates', '/contact': 'contact', work: 'projects' };
    function resolveAnchor() {
      const target = legacy[window.location.hash.slice(1)];
      if (!target) return;
      window.history.replaceState(null, '', `#${target}`);
      document.getElementById(target)?.scrollIntoView({ behavior: 'instant' });
    }
    resolveAnchor();
    window.addEventListener('hashchange', resolveAnchor);
    return () => window.removeEventListener('hashchange', resolveAnchor);
  }, []);

  return <><a className="skip-link" href="#main-content">Skip to content</a><NavBar />
    <main id="main-content" tabIndex={-1}>
      <section id="home" className="hero" aria-labelledby="hero-name">
        <div className="hero-copy">
          <h1 id="hero-name" aria-label="Shahad Alharbi">Shahad<br /><em>Alharbi</em></h1>
          <div className="hero-identity">
            <p className="hero-role">Computer Science Graduate | AI &amp; Software Engineering</p>
            <p>BSc (Hons) Computer Science with First-Class Honours from the University of Manchester.</p>
          </div>
          <a className="work-link" href="#projects">Projects</a>
        </div>
      </section>
      <About /><Skills /><Projects /><Certificates /><Contact />
    </main>
    <Footer />
  </>;
}
