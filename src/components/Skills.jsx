import styles from './StyleSheet.module.css';

function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsCard}>

        <div className={styles.skillGroup}>
          <h2>Skills</h2>
          <h3>Languages</h3>
          <p id="paragraph">I have used the following languages in my projects:</p>
          <div className={styles.badges}>
            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" className={styles.badgeImage} />
            </a>
            <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" className={styles.badgeImage} />
            </a>
            <a href="https://en.cppreference.com/w/c" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" className={styles.badgeImage} />
            </a>
            <a href="https://en.cppreference.com/w/cpp" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" className={styles.badgeImage} />
            </a>
            <a href="https://www.haskell.org/documentation/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Haskell-5D4F85?style=for-the-badge&logo=haskell&logoColor=white" alt="Haskell" className={styles.badgeImage} />
            </a>
            <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" className={styles.badgeImage} />
            </a>
            <a href="https://www.rust-lang.org/learn" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" className={styles.badgeImage} />
            </a>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.skillGroup}>
          <h3>Libraries & Frameworks</h3>
          <p id="paragraph">In addition to small libraries, I’ve worked with the following frameworks and libraries in my projects:</p>
          <div className={styles.badges}>
            <a href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" className={styles.badgeImage} />
            </a>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" className={styles.badgeImage} />
            </a>
            <a href="https://docs.opencv.org/master/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" className={styles.badgeImage} />
            </a>
            <a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn" className={styles.badgeImage} />
            </a>
            <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" className={styles.badgeImage} />
            </a>
            <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" className={styles.badgeImage} />
            </a>
            <a href="https://matplotlib.org/stable/users/index.html" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" className={styles.badgeImage} />
            </a>
            <a href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=seaborn&logoColor=white" className={styles.badgeImage} />
            </a>
            <a href="https://plotly.com/python/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white" className={styles.badgeImage} />
            </a>
            <a href="https://github.com/santosjorge/cufflinks" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Cufflinks-268bd2?style=for-the-badge&logoColor=white" className={styles.badgeImage} />
            </a>
            <a href="https://www.tensorflow.org/api_docs" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" className={styles.badgeImage} />
            </a>
            <a href="https://pytorch.org/docs/stable/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" className={styles.badgeImage} />
            </a>

            <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Flask-8A2BE2?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" className={styles.badgeImage}/>
          </a>

          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.skillGroup}>
          <h3 id="skills-header3">Databases</h3>
          <p id="paragraph">These are the databases I’ve used in my projects:</p>
          <div className={styles.badges}>
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" className={styles.badgeImage} />
            </a>
            <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className={styles.badgeImage} />
            </a>
            <a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" className={styles.badgeImage} />
            </a>
            <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" className={styles.badgeImage} />
            </a>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.skillGroup}>
          <h3 id="skills-header3">Tools</h3>
          <p id="paragraph">Tools I’ve worked with during development and report writing:</p>
          <div className={styles.badges}>
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" className={styles.badgeImage} />
            </a>
            <a href="https://www.kernel.org/doc/html/latest/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Linux-000000?style=for-the-badge&logo=linux&logoColor=FCC624" alt="Linux" className={styles.badgeImage} />
            </a>
            <a href="https://learn.microsoft.com/en-us/windows/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=microsoftwindows&logoColor=white" alt="Windows" className={styles.badgeImage} />
            </a>
            <a href="https://www.latex-project.org/help/documentation/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/LaTeX-008080?style=for-the-badge&logo=latex&logoColor=white" alt="LaTeX" className={styles.badgeImage} />
            </a>
            <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"alt="Docker"className={styles.badgeImage}/>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
