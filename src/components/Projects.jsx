import React from 'react';
import styles from './StyleSheet.module.css';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import {useTheme} from '../components/ThemeContext';
import NavBar from './NavBar';
function Projects(){
    const {theme, toggleTheme} = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    return(<>
    <NavBar/>
    <section className={styles.skillsCard}>
        <span>
            <a href='https://github.com/ShahadAlharbi21'>
                <img src={githubIcon} alt='Github icon'/>
            </a>
        </span>
    </section>
    
    </>
    );
};

export default Projects;