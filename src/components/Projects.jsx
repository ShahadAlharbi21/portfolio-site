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
                        <h2>A Distributed Booking System for Coordinating Hotel and Band Reservations</h2>
                        <p>Coursework Project | Apr 2025 – May 2025</p>
                        <ul>
                            <li>Built a Python CLI application for booking hotel and band slots for wedding events.</li>
                            <li>Users can view, reserve, or cancel slots interactively via a menu-driven terminal interface.</li>
                            <li>Integrated with REST APIs to fetch availability and make bookings in real-time.</li>
                            <li>Automatically finds and reserves the earliest matching slot for both services.</li>
                            <li>Includes logic to handle server errors, retries, and invalid user input gracefully.</li>
                            <li>Automatically cancels unmatched or obsolete bookings to stay within reservation limits.</li>
                            <li>Enforces a strict one-request-per-second rate to avoid API throttling.</li>
                            <li>Always holds a confirmed reservation before switching to a better matching one.</li>
                        </ul>
                        </div>
                        <div className={styles.rightTechCard}>
                        <section>
                            <h3>Languages</h3>
                            <div className={styles.badgeRow}>
                            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                            </a>
                            </div>
                        </section>
                        <hr />
                        <section>
                            <h3>Libraries</h3>
                            <div className={styles.badgeRow}>
                            <a href="https://requests.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.shields.io/badge/Requests-0077B5?style=for-the-badge&logo=requests&logoColor=white" />
                            </a>
                            <a href="https://simplejson.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.shields.io/badge/SimpleJSON-003B57?style=for-the-badge&logo=json&logoColor=white" />
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
                                <li>Developed a binary linear classifier from scratch using NumPy to predict loan approvals from a dataset of 45,000 entries and 14 features.</li>
                                <li>Applied gradient descent to minimise hinge loss with L2 regularisation over 190 iterations using a learning rate of <strong>0.0001</strong> and regularisation constant <strong>C = 0.2</strong>.</li>
                                <li>Performed weight updates using fully vectorised operations.</li>
                                <li>Evaluated the model using custom accuracy and F1 metrics, achieving <strong>89.3%</strong> test accuracy and <strong>0.75</strong> F1 score.</li>
                                <li>Visualised training progress by plotting cost and accuracy per iteration to assess convergence.</li>
                                <li>Conducted a learning rate analysis using values from <strong>0.00001</strong> to <strong>0.5</strong>, tracking cost, accuracy, and F1 score on training and testing sets.</li>
                                <li>Developed a regression model using scikit-learn’s MLP to predict soybean production from 52,678 samples with 13 features.</li>
                                <li>Standardised inputs and performed model selection via grid search over architectures, activation functions, and iteration counts.</li>
                                <li>Best model used ReLU activation, (100, 100) layers, and 200 iterations, achieving CV MSE <strong>9.92e-10</strong> (std <strong>1.89e-09</strong>) and test MSE <strong>2.71e-10</strong>, R² ≈ <strong>1.0</strong>.</li>
                                <li>Used Gradient Boosting to assess feature importance and confirmed impact by incrementally adding top features.</li>
                                <li>Final model was pipelined with imputation and scaling, trained on the full dataset, saved, and verified for execution.</li>
                            </ul>
                            </div>
                            <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                                </a>
                                </div>
                            </section>
                            <hr />
                            <section>
                                <h3>Libraries</h3>
                                <div className={styles.badgeRow}>
                                <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
                                </a>
                                <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
                                </a>
                                <a href="https://matplotlib.org/stable/contents.html" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" />
                                </a>
                                <a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />
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
                            <li>Implemented a custom histogram generator from scratch in C++ using OpenCV, without built-in histogram functions.</li>
                            <li>Drew scaled bar plots for each intensity on a 512×400 image, with vertical grid lines for manual threshold selection.</li>
                            <li>Applied the histogram tool to real-world images for segmentation in retinal scans and motorway signs.</li>
                            <li>Built a full horizon detection pipeline: grayscale conversion, Gaussian blur, Canny edge detection, and Hough transform.</li>
                            <li>Filtered out short or vertical lines and kept approximately horizontal ones.</li>
                            <li>Used polynomial regression to fit a smooth curve to the horizon line.</li>
                            <li>Overlayed the detected horizon on the original image for visual confirmation.</li>
                            <li>Tuned parameters (blur, edge, Hough) per image to ensure robustness across sky-ground transitions.</li>
                        </ul>
                        </div>
                        <div className={styles.rightTechCard}>
                        <section>
                            <h3>Languages</h3>
                            <div className={styles.badgeRow}>
                            <a href="https://en.cppreference.com/w/cpp" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" className={styles.badgeImage} />
                            </a>
                            </div>
                        </section>
                        <hr />
                        <section>
                            <h3>Libraries</h3>
                            <div className={styles.badgeRow}>
                            <a href="https://docs.opencv.org/master/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" className={styles.badgeImage} />
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
                                <li>Built a client-server messaging system in Python to support multi-user communication over sockets.</li>
                                <li>Implemented server-side logic to manage client connections, disconnections, and message handling.</li>
                                <li>Maintained a real-time count of active users.</li>
                                <li>Designed a custom text-based protocol supporting user registration, broadcasting, private messaging, and disconnection.</li>
                                <li>Defined the protocol structure in a JSON file and validated it via manual testing.</li>
                                <li>Developed a client that registers with a unique name (with retry logic), processes user input, and communicates with the server.</li>
                                <li>Ensured clean disconnection with confirmation from the server.</li>
                            </ul>
                            </div>
                            <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                                </a>
                                </div>
                            </section>
                            <hr/>
                            <section>
                                <h3>Libraries</h3>
                                <div className={styles.badgeRow}>
                                    <a href="https://docs.python.org/3/library/threading.html" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.shields.io/badge/threading-6A1B9A?style=for-the-badge" alt="threading" className={styles.badgeImage} />
                                    </a>
                                    <a href="https://docs.python.org/3/library/socket.html" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.shields.io/badge/socket-00695C?style=for-the-badge" alt="socket" className={styles.badgeImage} />
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
                                <li>Built an end-to-end BM25 retrieval pipeline: preprocessing → corpus stats → scoring → ranked results.</li>
                                <li>Implemented a deterministic preprocessing stack: trim, lowercase, convert punctuation to spaces (preserving token boundaries), remove stopwords, optional stemming.</li>
                                <li>Handled tricky punctuation safely (e.g., “motor-driven” → “motor driven”, “world’s” → “world s”) and collapsed redundant whitespace.</li>
                                <li>Calculated inverse document frequency with BM25 0.5 smoothing (log₁₀) and safe handling for unseen terms.</li>
                                <li>Scored documents with BM25 (k₁=2, b=0.75) using per-document term frequencies and length normalisation.</li>
                                <li>Ranked all documents by score and returned the top-N original texts with deterministic tie-breaking.</li>
                            </ul>

                        </div>

                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" className={styles.badgeImage} />
                                    </a>
                                </div>
                            </section>
                            <hr />
                            <section>
                                <h3>Libraries</h3>
                                <div className={styles.badgeRow}>
                                    <a href="https://pypi.org/project/PyStemmer/" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', marginRight:'8px', verticalAlign:'middle'}}>
                                        <img src="https://img.shields.io/badge/PyStemmer-2EA44F?style=for-the-badge&logo=leaflet&logoColor=white" alt="PyStemmer" className={styles.badgeImage} />
                                    </a>
                                    <a href="https://docs.python.org/3/library/re.html" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', verticalAlign:'middle'}}>
                                        <img src="https://img.shields.io/badge/re%20(regex)-8A2BE2?style=for-the-badge&logo=regex&logoColor=white" alt="re (regex)" className={styles.badgeImage} />
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
                                <li>Built a visual-odometry feature-matching component: detect SIFT keypoints → match between consecutive frames → resolve pixel coordinates → inspect results.</li> 
                                <li>Implemented three OpenCV/BFMatcher strategies (distance thresholding, nearest neighbour, NNDR) and returned serialisable, deterministic match lists.</li> 
                                <li>Normalised feature IDs by sorting keypoints, ensuring consistent behaviour across OpenCV versions.</li> 
                                <li>Computed coordinates for the selected feature and its matches, compatible with the provided CLI visualisations/outputs.</li> <li>Handled edge cases cleanly (no matches, out-of-range feature IDs) and validated on the MyKITTI subset.</li> 
                            </ul>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                    <div className={styles.badgeRow}>
                                        <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" alt="Python" className={styles.badgeImage} />
                                        </a>
                                    </div>
                            </section>
                            <hr />
                            <section>
                                <h3>Libraries</h3>
                                <div className={styles.badgeRow}>
                                    <a href="https://docs.opencv.org/master/" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" className={styles.badgeImage} />
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
                            <p>
                                Developed a Python-based constraint satisfaction solution using the python-constraint module. The first part involved formalising a logic puzzle from written instructions by identifying the relevant entities and relationships, then encoding them into a constraint satisfaction problem (CSP) with variables, domains, and rules. Used both built-in and custom constraint types to model conditions like unique assignments and value dependencies. The second part focused on generating pandiagonal magic squares, building general-purpose functions to define diagonal patterns and enforce arithmetic constraints for square validity.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                                </div>
                            </section>
                            <hr />
                            <section>
                                <h3>Libraries</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/python--constraint-2ea44f?style=for-the-badge&logoColor=white" />
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
                            <p>
                                Developed a Reversi (Othello) game-playing agent in Java using a minimax algorithm enhanced with alpha-beta pruning to optimise decision-making efficiency. Implemented a custom evaluation function that assessed board states based on piece positioning, control of corners and edges, and potential mobility. Integrated the agent into the provided game framework and manually tested its behaviour through extensive gameplay via the graphical user interface, confirming its ability to play strategically and respond dynamically to human moves.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white"/>
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
                            <p>
                                Built a complete employee management system for Kilburnazon using PHP, MySQL, HTML, CSS, and JavaScript. Features include a searchable employee directory with filters and profile views, leave request handling with manager approvals, automated promotion tracking, payroll report generation with export options, and termination logging with timestamps and user tracking.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
                                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                                </div>
                            </section>
                            <hr />
                            <section>
                                <h3>Databases</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
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
                            <p>
                                Designed a fully normalised relational database for Kilburnazon, based on a verbal-only specification. Produced an EER diagram in Crow’s Foot notation, normalised all relations to 3NF, and defined a physical data model including data types and constraints.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Tools</h3>
                                <div className={styles.badgeRow}>
                                    <a href="https://www.diagrams.net" target="_blank" rel="noopener noreferrer">
                                        <img src="https://img.shields.io/badge/diagrams.net-FF7700?style=for-the-badge&logo=drawio&logoColor=white" />
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
                            <p>
                                Implemented the complete simulation logic of Kim-Joy’s Magic Bakery from scratch using UML diagrams. Managed customers, orders, recipes, ingredients, and queues. Passed all 422 structural and 285 functional tests.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" />
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
                            <p>
                                Developed a Python-based cache simulator to compare Cyclic, LRU, MRU, and LFU strategies. Built logic for cache hits, replacements, and statistics tracking.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
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
                            <p>
                                Built the MU0 processor in Verilog, completing the datapath and control logic, simulating operations, and deploying to FPGA hardware for validation.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/Verilog-orange?style=for-the-badge&logoColor=white" />
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
                            <p>
                                Designed an FSM for a Toucan pedestrian crossing using Verilog with next-state logic, state memory, and output logic. Validated via simulation and FPGA deployment.
                            </p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/Verilog-orange?style=for-the-badge&logoColor=white" />
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
                                <p>
                                    Developed a multiplayer Pong game with Python using tkinter and Pillow. Included interactive GUI, real-time gameplay, state saving, cheat codes, and a boss key.
                                </p>
                            </div>
                            <div className={styles.rightTechCard}>
                                <section>
                                    <h3>Languages</h3>
                                    <div className={styles.badgeRow}>
                                        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                                    </div>
                                </section>
                                <hr />
                                <section>
                                    <h3>Libraries</h3>
                                    <div className={styles.badgeRow}>
                                        <img src="https://img.shields.io/badge/Tkinter-%233776AB?style=for-the-badge&logo=windowsterminal&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Pillow-306998?style=for-the-badge" />
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
