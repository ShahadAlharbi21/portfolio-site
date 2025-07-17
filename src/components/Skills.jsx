import styles from './StyleSheet.module.css';

function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsCard}>
        <h2 id="skills-header2">Skills</h2>

        <div className={styles.skillGroup}>
          <h3>Languages</h3>
          <p id="paragraph">I have used the following languages in my projects:</p>
          <div className={styles.badges}>
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" className={styles.badgeImage} />
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.skillGroup}>
          <h3>Libraries & Frameworks</h3>
          <p id="paragraph">I’ve worked with the following frameworks and libraries:</p>
          <div className={styles.badges}>
            <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn" className={styles.badgeImage} />
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.skillGroup}>
          <h3 id="skills-header3">Databases</h3>
          <p id="paragraph">These are the databases I’ve used in my projects:</p>
          <div className={styles.badges}>
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" className={styles.badgeImage} />
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.skillGroup}>
          <h3 id="skills-header3">Tools</h3>
          <p id="paragraph">Tools I’ve worked with during development and report writing:</p>
          <div className={styles.badges}>
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/Linux-000000?style=for-the-badge&logo=linux&logoColor=FCC624" alt="Linux" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=microsoftwindows&logoColor=white" alt="Windows" className={styles.badgeImage} />
            <img src="https://img.shields.io/badge/LaTeX-008080?style=for-the-badge&logo=latex&logoColor=white" alt="LaTeX" className={styles.badgeImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
