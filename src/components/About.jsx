import styles from './StyleSheet.module.css';
import Skills from './Skills';
import NavBar from './NavBar';
import Footer from './Footer';
{/*import Resume from '../assets/Shahad_Dhwihi_S_Alharbi_Resume.pdf';*/}



function About() {
  return(
    <>
  <NavBar/>
  <section className={styles.container}>
    <div className={styles.info}>
        <h1>
            <b>Shahad Alharbi</b>
        </h1>
        <h2>
            <b>Computer Science student at the University of Manchester.</b>
        </h2>
        <div className={styles.limitWidth}>
            <p>I’m currently in my final year of a Computer Science degree at the University of Manchester, supported by a competitive scholarship from NEOM. Throughout my studies, I’ve developed strong programming skills, demonstrated through various solo and coursework projects. I’m especially interested in Data Science and Machine Learning.</p>
        </div>
        {/*<a href={Resume} download>
            <button className="hover">Resume</button>
        </a>*/}

    </div>

  </section>
  <Skills/>
  <Footer/>
  </>
  );
  
}

export default About