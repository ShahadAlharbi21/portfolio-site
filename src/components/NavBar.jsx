import React, { useState } from 'react';
import styles from './StyleSheet.module.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from '../components/ThemeContext';


function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ['Home', 'Projects', 'Certificates', 'Contact'];
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <div className={styles.NavBar}>
      <ul>
        <li>    
            <div>
                <img 
                className={styles.colorMode} 
                src={themeIcon}
                onClick={toggleTheme}
                />
            </div>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            <a
              href="/about"
              className={activeIndex === i ? styles.active : ''}
              onClick={() => setActiveIndex(i)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
