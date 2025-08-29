import styles from './StyleSheet.module.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Projects() {
  return (
    <>
      <NavBar />

      <section className={styles.projectsSection}>
        <h1>Projects</h1>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>X-Ray Prohibited Item Detection Platform</h2>
              <p>Solo Project | Jul 2025 – Present</p>
              <ul>
                <li>Develops a full-stack platform for airport and customs security workflows with role-based authentication.</li>
                <li>Implements JWT authentication so administrators and users have distinct dashboards and permissions.</li>
                <li>Creates a secure Flask REST API with password hashing and CORS configuration for React integration.</li>
                <li>Designs PostgreSQL schema for users, sessions, and scans, with raw SQL operations handled via psycopg2.</li>
                <li>Containerises backend, frontend, and database with Docker, orchestrated with docker-compose.</li>
                <li>Plans next phase to integrate machine learning (OpenCV, scikit-learn, PyTorch), build analytical dashboards, and add a Bash script for automated setup.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                  <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="JavaScript" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries & Frameworks</h3>
                <div className={styles.badgeRow}>
                  <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Flask-8A2BE2?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
                  </a>
                  <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                  </a>
                  <a href="https://docs.opencv.org/master/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" />
                  </a>
                  <a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn" />
                  </a>
                  <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                  </a>
                  <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
                  </a>
                  <a href="https://matplotlib.org/stable/users/index.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" alt="Matplotlib" />
                  </a>
                  <a href="https://pytorch.org/docs/stable/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
                  </a>
                  <a href="https://pyjwt.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/PyJWT-2E7D32?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="PyJWT" />
                  </a>
                  <a href="https://pypi.org/project/python-dotenv/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/python--dotenv-2C8EBB?style=for-the-badge&logo=dotenv&logoColor=white" alt="python-dotenv" />
                  </a>
                  <a href="https://werkzeug.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Werkzeug-008080?style=for-the-badge&logo=werkzeug&logoColor=white" alt="Werkzeug" />
                  </a>
                  <a href="https://pypi.org/project/psycopg2-binary/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/psycopg2--binary-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="psycopg2-binary" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Databases</h3>
                <div className={styles.badgeRow}>
                  <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Tools</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                  </a>
                  <a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Bash-000000?style=for-the-badge&logo=gnubash&logoColor=white" alt="Bash" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>A Distributed Booking System for Coordinating Hotel and Band Reservations</h2>
              <p>Coursework Project | Apr 2025 – May 2025</p>
              <ul>
                <li>Built a Python CLI to coordinate hotel and band reservations for wedding events.</li>
                <li>Allowed users to interactively view, reserve, and cancel bookings via a menu-driven interface.</li>
                <li>Integrated REST APIs for real-time availability and reservation confirmation.</li>
                <li>Implemented automatic earliest-slot matching across both services for convenience.</li>
                <li>Added error handling, retries, and validation to ensure stable operation.</li>
                <li>Applied strict rate-limiting to avoid exceeding API usage limits.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://requests.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Requests-0077B5?style=for-the-badge&logo=requests&logoColor=white" alt="Requests" />
                  </a>
                  <a href="https://simplejson.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/SimpleJSON-003B57?style=for-the-badge&logo=json&logoColor=white" alt="SimpleJSON" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Loan Classification and Soybean Yield Prediction</h2>
              <p>Coursework Project | Apr 2025 – Apr 2025</p>
              <ul>
                <li>Developed a binary linear classifier from scratch in NumPy for 45,000 loan applications with 14 features.</li>
                <li>Implemented gradient descent with hinge loss, L2 regularisation, and learning-rate scheduling.</li>
                <li>Achieved 89.3% accuracy and F1 score of 0.75 on test data using custom evaluation metrics.</li>
                <li>Visualised convergence with diagnostic plots and conducted learning-rate sensitivity analysis.</li>
                <li>Extended project with a scikit-learn MLP regressor for soybean yield prediction with 52,678 samples.</li>
                <li>Validated with cross-validation (MSE 9.92e−10) and feature importance using Gradient Boosting.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                  </a>
                  <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
                  </a>
                  <a href="https://matplotlib.org/stable/index.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" alt="Matplotlib" />
                  </a>
                  <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Histogram & Horizon Detection with OpenCV</h2>
              <p>Coursework Project | Apr 2025 – Apr 2025</p>
              <ul>
                <li>Implemented a custom histogram generator in C++ without built-in helpers.</li>
                <li>Created a rendering tool with axes, grid lines, and tick labels for thresholding.</li>
                <li>Applied the histogram to retinal scans and motorway signage segmentation tasks.</li>
                <li>Built a horizon detection pipeline with grayscale conversion, blur, edges, and Hough transform.</li>
                <li>Filtered outliers and fitted a polynomial for smoothed horizon detection.</li>
                <li>Overlayed results on original images for validation across varied contrasts.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://en.cppreference.com/w/cpp" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.opencv.org/master/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>A Robust Socket-Based Messaging System for Healthcare Professionals</h2>
              <p>Coursework Project | Mar 2025 – Mar 2025</p>
              <ul>
                <li>Engineered a concurrent client-server chat system using sockets and threads in Python.</li>
                <li>Designed a custom JSON protocol for register, list, broadcast, direct message, and quit actions.</li>
                <li>Ensured unique usernames with retry logic and acknowledgement responses.</li>
                <li>Maintained live user counts with activity tracking on the server side.</li>
                <li>Handled malformed frames and unexpected disconnects gracefully.</li>
                <li>Produced clear CLI logs to aid debugging and testing of message flow.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/library/threading.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/threading-6A1B9A?style=for-the-badge" alt="threading" />
                  </a>
                  <a href="https://docs.python.org/3/library/socket.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/socket-00695C?style=for-the-badge" alt="socket" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>BM25 for Retrieval-Augmented Question Answering</h2>
              <p>Coursework Project | Dec 2024 – Dec 2024</p>
              <ul>
                <li>Implemented a BM25 search engine from scratch with deterministic preprocessing steps.</li>
                <li>Normalised tokens by trimming, lowercasing, punctuation spacing, and optional stemming.</li>
                <li>Applied stopword removal and safe handling of unseen terms to avoid index drift.</li>
                <li>Computed inverse document frequencies with smoothing and stable tie-breaking.</li>
                <li>Ranked documents by BM25 score with length normalisation and per-term weighting.</li>
                <li>Returned top-N results with reproducible outputs and associated scores.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://pypi.org/project/PyStemmer/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/PyStemmer-2EA44F?style=for-the-badge" alt="PyStemmer" />
                  </a>
                  <a href="https://docs.python.org/3/library/re.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/re%20(regex)-8A2BE2?style=for-the-badge" alt="re regex" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Features for Estimating Autonomous Vehicle Poses</h2>
              <p>Coursework Project | Nov 2024 – Nov 2024</p>
              <ul>
                <li>Implemented a SIFT-based feature matcher for visual odometry across sequential frames.</li>
                <li>Developed three BFMatcher strategies: thresholding, nearest neighbour, and NNDR.</li>
                <li>Ensured deterministic results by normalising keypoint identifiers across runs.</li>
                <li>Calculated coordinates of matched features for downstream analysis pipelines.</li>
                <li>Handled edge cases such as no matches, invalid indices, and empty frames robustly.</li>
                <li>Validated on MyKITTI subset and confirmed reliability with visual inspection.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.opencv.org/master/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Constraint Satisfaction</h2>
              <p>Coursework Project | Nov 2024 – Nov 2024</p>
              <ul>
                <li>Modelled a logic puzzle as a Constraint Satisfaction Problem in Python using python-constraint.</li>
                <li>Defined variables, domains, and rules with built-in and custom constraint functions.</li>
                <li>Implemented uniqueness and dependency rules for correctness and consistency.</li>
                <li>Generated pandiagonal magic squares using arithmetic constraints and reusable functions.</li>
                <li>Created automated validation routines to check integrity of generated solutions.</li>
                <li>Produced compact, human-readable solution outputs for assessment.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://pypi.org/project/python-constraint/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/python--constraint-2ea44f?style=for-the-badge" alt="python-constraint" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Othello AI Using Minimax with Alpha-Beta Pruning</h2>
              <p>Coursework Project | Oct 2024 – Oct 2024</p>
              <ul>
                <li>Built an Othello engine in Java using minimax search with alpha-beta pruning.</li>
                <li>Implemented move generation, legality checks, and turn sequencing.</li>
                <li>Created evaluation heuristics based on corners, edges, mobility, and positional values.</li>
                <li>Optimised search depths to balance accuracy and responsiveness.</li>
                <li>Integrated engine with a GUI loop for human vs AI matches.</li>
                <li>Validated through extensive gameplay testing against human players.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Kilburnazon Employee Management System</h2>
              <p>Coursework Project | Dec 2024 – Dec 2024</p>
              <ul>
                <li>Developed a full-stack employee management system with PHP, MySQL, HTML, CSS, and JavaScript.</li>
                <li>Implemented CRUD operations with server-side validation and advanced filters.</li>
                <li>Designed workflows for leave requests, manager approvals, and promotions.</li>
                <li>Generated payroll reports with CSV and PDF export capabilities.</li>
                <li>Logged user actions and changes with timestamped audit entries.</li>
                <li>Maintained integrity with normalised relational database schema.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                  </a>
                  <a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                  </a>
                  <a href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                  </a>
                  <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="JavaScript" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Databases</h3>
                <div className={styles.badgeRow}>
                  <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Kilburnazon Database Design</h2>
              <p>Coursework Project | Oct 2024 – Oct 2024</p>
              <ul>
                <li>Translated verbal specifications into a normalised relational schema up to 3NF.</li>
                <li>Created an EER diagram in Crow’s Foot notation defining entities and relationships.</li>
                <li>Specified attributes, keys, and integrity constraints for each entity.</li>
                <li>Developed a physical schema with SQL-compatible data types.</li>
                <li>Produced validation queries to answer stakeholder questions.</li>
                <li>Ensured extensibility for reporting and future integration.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Tools</h3>
                <div className={styles.badgeRow}>
                  <a href="https://www.diagrams.net" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/diagrams.net-FF7700?style=for-the-badge&logo=drawio&logoColor=white" alt="diagrams.net" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
            <div className={styles.projectInner}>
                <div className={styles.leftContent}>
                <h2>Spam Filter with Naïve Bayes</h2>
                <p>Coursework Project | Apr 2024 – Apr 2024</p>
                <ul>
                    <li>Developed a Naïve Bayes spam filter from scratch in Python, without scikit-learn.</li>
                    <li>Preprocessed messages using regex cleaning, tokenisation, and normalisation.</li>
                    <li>Built frequency dictionaries for spam and ham messages to estimate probabilities.</li>
                    <li>Split dataset into training, validation, and test sets to measure generalisation.</li>
                    <li>Visualised word distributions and frequencies using Matplotlib and WordCloud.</li>
                    <li>Achieved an accuracy of 87% on the test set, with detailed misclassification analysis.</li>
                </ul>
                </div>
                <div className={styles.rightTechCard}>
                <section>
                    <h3>Languages</h3>
                    <div className={styles.badgeRow}>
                    <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                    </a>
                    </div>
                </section>
                <hr />
                <section>
                    <h3>Libraries</h3>
                    <div className={styles.badgeRow}>
                    <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
                    </a>
                    <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                    </a>
                    <a href="https://matplotlib.org/stable/index.html" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" alt="Matplotlib" />
                    </a>
                    <a href="https://amueller.github.io/word_cloud/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/WordCloud-46A2F1?style=for-the-badge&logo=cloud&logoColor=white" alt="WordCloud" />
                    </a>
                    <a href="https://docs.python.org/3/library/re.html" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/re%20(regex)-8A2BE2?style=for-the-badge" alt="re (regex)" />
                    </a>
                    </div>
                </section>
                </div>
            </div>
        </div>



        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Magic Bakery</h2>
              <p>Coursework Project | Apr 2024 – Apr 2024</p>
              <ul>
                <li>Implemented a full simulation of Kim-Joy’s Magic Bakery in Java following UML diagrams.</li>
                <li>Coded recipe dependencies, ingredient queues, and order resolution processes.</li>
                <li>Developed validation functions to enforce recipe correctness and state invariants.</li>
                <li>Simulated player actions with deterministic rules for game flow.</li>
                <li>Ensured reliability with over 700 structural and functional tests.</li>
                <li>Produced consistent behaviour across runs with robust state handling.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Caching Simulation</h2>
              <p>Coursework Project | Apr 2024 – Apr 2024</p>
              <ul>
                <li>Developed a cache simulator in Python supporting Cyclic, LRU, MRU, and LFU strategies.</li>
                <li>Implemented detection of cache hits, misses, and replacement policies.</li>
                <li>Created workload generators for sequential, random, and Zipf-like access patterns.</li>
                <li>Collected statistics on hit rates and evictions across strategies.</li>
                <li>Output reproducible runs with CSV summaries for comparison.</li>
                <li>Analysed trade-offs between strategies for performance evaluation.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>MU0 Processor Implementation</h2>
              <p>Coursework Project | Nov 2023 – Nov 2023</p>
              <ul>
                <li>Implemented the MU0 CPU from scratch in Verilog including datapath and control unit.</li>
                <li>Simulated fetch-decode-execute cycles to validate ALU, memory, and branching.</li>
                <li>Deployed to FPGA hardware and executed assembly programmes.</li>
                <li>Ensured timing correctness under board-level clock and reset conditions.</li>
                <li>Documented assumptions for reproducibility and debugging.</li>
                <li>Verified correctness through simulation and hardware tests.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Verilog-FFA500?style=for-the-badge" alt="Verilog" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Toucan Crossing Controller (Verilog FSM Design)</h2>
              <p>Coursework Project | Nov 2023 – Nov 2023</p>
              <ul>
                <li>Designed a finite-state machine controller for Toucan crossings in Verilog.</li>
                <li>Implemented next-state logic, memory elements, and output control signals.</li>
                <li>Simulated controller behaviour to confirm compliance with traffic rules.</li>
                <li>Tested safety and timing constraints before FPGA deployment.</li>
                <li>Produced diagrams documenting state transitions and module responsibilities.</li>
                <li>Validated design through FPGA testing under real-time inputs.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://en.wikipedia.org/wiki/Verilog" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Verilog-FFA500?style=for-the-badge" alt="Verilog" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.ProjectCard}>
          <div className={styles.projectInner}>
            <div className={styles.leftContent}>
              <h2>Pong Game</h2>
              <p>Coursework Project | Oct 2023 – Nov 2023</p>
              <ul>
                <li>Created a two-player Pong game in Python using tkinter and Pillow.</li>
                <li>Implemented real-time ball movement, paddle controls, and scoring logic.</li>
                <li>Added features for save/load state and custom key bindings.</li>
                <li>Developed collision detection for interactive and responsive gameplay.</li>
                <li>Built a “boss key” to instantly hide the window for discretion.</li>
                <li>Packaged assets and settings for consistent cross-system performance.</li>
              </ul>
            </div>
            <div className={styles.rightTechCard}>
              <section>
                <h3>Languages</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" />
                  </a>
                </div>
              </section>
              <hr />
              <section>
                <h3>Libraries</h3>
                <div className={styles.badgeRow}>
                  <a href="https://docs.python.org/3/library/tkinter.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Tkinter-3776AB?style=for-the-badge" alt="Tkinter" />
                  </a>
                  <a href="https://pillow.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Pillow-306998?style=for-the-badge" alt="Pillow" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Projects;
