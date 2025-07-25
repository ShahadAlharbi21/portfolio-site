import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="/"><b>Home</b></Link></li> {/* changed from /about to / */}
        <li><Link to="/projects"><b>Projects</b></Link></li>
        <li><Link to="/certificates"><b>Certificates</b></Link></li>
        <li><Link to="/contact"><b>Contact</b></Link></li>
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
