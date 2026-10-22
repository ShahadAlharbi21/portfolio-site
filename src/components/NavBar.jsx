import { useEffect, useState } from 'react';
import { useTheme } from './theme-context';
const sections = ['about', 'skills', 'projects', 'education', 'certificates'];
const labels = { about: 'About', skills: 'Skills', projects: 'Projects', education: 'Education & Recognition', certificates: 'Certificates' };
export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-5% 0px -55% 0px' });
    ['home', ...sections].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return <header className="masthead">
    <a className="wordmark" href="#home" aria-label="Shahad Alharbi home">s<span>.</span>a</a>
    <nav aria-label="Main navigation">{sections.map(section => <a key={section} href={`#${section}`} className={active === section ? 'active' : undefined} aria-current={active === section ? 'location' : undefined}>{labels[section]}</a>)}</nav>
    <button className="theme-switch" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? '◐' : '◑'}</button>
  </header>;
}
