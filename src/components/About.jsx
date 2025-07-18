import styles from './StyleSheet.module.css';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import Skills from './Skills';
import NavBar from './NavBar';
{/*import Resume from '../assets/Shahad_Dhwihi_S_Alharbi_Resume.pdf';*/}
import {useTheme} from '../components/ThemeContext';


function About() {
    const {theme, toggleTheme} = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;
  return(
    <>
  <NavBar/>
  <section id="Shahad" className={styles.container}>
    <div className={styles.info}>
        <h1>
            <b>Shahad Alharbi</b>
        </h1>
        <h2>
            Computer Science student at the University of Manchester.
        </h2>
        <div>
            <p>I’m currently in my final year of a Computer Science degree at the University of Manchester, supported by a competitive scholarship from NEOM.</p>
            <p>Throughout my studies, I’ve developed strong programming skills, demonstrated through various solo and coursework projects.</p>
            <p>I’m especially interested in Data Science and Machine Learning.</p>
        </div>
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