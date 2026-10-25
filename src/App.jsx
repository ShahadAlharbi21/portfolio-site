import { useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // The CV route opens the hero; plain section anchors keep in-page navigation.
    const aliases = { contact: 'footer', work: 'projects' };
    let mounted = true;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    function resolveAnchor() {
      if (window.location.hash.replace(/\/$/, '') === '#/about') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        return;
      }
      const route = window.location.hash.slice(1).replace(/^\//, '').replace(/\/$/, '');
      const target = aliases[route] || route;
      if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' });
    }
    const frame = window.requestAnimationFrame(resolveAnchor);
    const initialHash = window.location.hash;
    document.fonts?.ready.then(() => {
      if (mounted && window.location.hash === initialHash) resolveAnchor();
    });
    window.addEventListener('hashchange', resolveAnchor);
    window.addEventListener('pageshow', resolveAnchor);
    return () => {
      mounted = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', resolveAnchor);
      window.removeEventListener('pageshow', resolveAnchor);
      window.history.scrollRestoration = previousRestoration;
    };
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
      <About /><Skills /><Projects /><Education /><Certificates />
    </main>
    <Footer />
  </>;
}
