import { NavLink, useLocation } from 'react-router-dom';
import styles from './StyleSheet.module.css';
import { useTheme } from './ThemeContext';

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  return (
    <nav className={styles.NavBar} aria-label="Main navigation">
      <NavLink to="/about" className={styles.brand}>
        <strong>Shahad Alharbi</strong><span>Computer Science · Manchester</span>
      </NavLink>
      <ul>
        <li><NavLink to="/about" aria-current={pathname === '/' || pathname === '/about' ? 'page' : undefined}>Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/certificates">Certificates</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><button type="button" className={styles.themeToggle} onClick={toggleTheme} aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}><span aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span></button></li>
      </ul>
    </nav>
  );
}
export default NavBar;
