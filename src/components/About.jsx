import styles from './StyleSheet.module.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import Skills from './Skills';
{/*import Resume from '../assets/Shahad_Dhwihi_S_Alharbi_Resume.pdf';*/}
import {useTheme} from '../components/ThemeContext';
function About() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
  return(
    <>
  <section id="Shahad" className={styles.container}>
    <div>
        <img 
        className={styles.colorMode} 
        src={themeIcon}
        onClick={toggleTheme}
        />
    </div>

    <div className={styles.info}>
        <h1>
            <b>Shahad Alharbi</b>
        </h1>
        <h2>
            Computer Science student at the University of Manchester.
        </h2>
        <p>
            I’m currently in my final year of a Computer Science degree at the University of Manchester, supported by a competitive scholarship from NEOM.
            Throughout my studies, I’ve developed strong programming skills, demonstrated through various solo and coursework projects.
            I’m especially interested in Data Science and Machine Learning.
        </p>
        <span>
            <a href='https://github.com/ShahadAlharbi21'>
                <img src={githubIcon} alt='Github icon'/>
            </a>
        </span>
        {/*<a href={Resume} download>
            <button className="hover">Resume</button>
        </a>*/}

    </div>
  </section>
  <Skills/>
  </>
  );
  
}

export default About