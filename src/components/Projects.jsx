import React from 'react';
import styles from './StyleSheet.module.css';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import {useTheme} from '../components/ThemeContext';
import NavBar from './NavBar';
import Footer from './Footer';
function Projects(){
    const {theme, toggleTheme} = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    return(<>
    <NavBar/>
    <section className={styles.projectsSection}>
        <h1>Projects</h1>
            <section className={styles.ProjectCard}>
                <h2>Loan Classification and Soybean Yield Prediction</h2>
                <h3> Coursework Project | Mar 2025 – Apr 2025</h3>
                <section lassName={styles.stack}>
                    <h3>Languages</h3>
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" className={styles.badgeImage} />
                </section>
            </section>
    </section>
    <Footer/>
    </>
    );
};

export default Projects;