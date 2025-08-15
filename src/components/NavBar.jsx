import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './StyleSheet.module.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from '../components/ThemeContext';

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <div className={styles.NavBar}>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <b>Home</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <b>Projects</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <b>Certificates</b>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <b>Contact</b>
          </NavLink>
        </li>
        <li id="icon">
          <img
            className={styles.colorMode}
            src={themeIcon}
            onClick={toggleTheme}
            alt="toggle theme"
          />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
