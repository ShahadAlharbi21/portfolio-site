import { NavLink } from 'react-router-dom';
import { useTheme } from './theme-context';
export default function NavBar() {
 const { theme, toggleTheme } = useTheme();
 return <header className="masthead"><a className="wordmark" href="#/about" aria-label="Shahad Alharbi home">s<span>.</span>a</a><nav aria-label="Main navigation"><NavLink to="/about">About</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/certificates">Certificates</NavLink><NavLink to="/contact">Contact <span aria-hidden="true">↗</span></NavLink></nav><button className="theme-switch" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? '◐' : '◑'}</button></header>;
}
