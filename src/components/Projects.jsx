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
                                <p>Built a Python-based booking client that interacts with RESTful hotel and band reservation APIs to coordinate wedding event bookings. The client retrieves available slots, identifies the earliest matching one, and attempts to reserve it for both services. Implemented robust retry logic to handle service unavailability, request delays, and concurrency conflicts. Enforced the one-request-per-second rule to comply with rate limits. Automatically cancels unmatched or obsolete reservations to stay within the two-reservation limit. Ensured that the system always holds at least one valid booking while continuing to search for better options. Provided a clear command-line interface with options to view, reserve, or cancel slots manually, while automating key steps for user convenience.</p>
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
                                    <img src="https://img.shields.io/badge/Requests-0077B5?style=for-the-badge&logo=requests&logoColor=white" />
                                    <img src="https://img.shields.io/badge/SimpleJSON-003B57?style=for-the-badge&logo=json&logoColor=white" />
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
                                <p>Developed a binary linear classifier from scratch using NumPy to predict loan approvals from a dataset of 45,000 entries and 14 features. Applied gradient descent to minimise hinge loss with L2 regularisation over 200 iterations, using a learning rate of <strong>0.0001</strong> and regularisation constant <strong>C = 0.2</strong>. Performed weight updates using fully vectorised operations. Evaluated the model with custom accuracy and F1 metrics, achieving <strong>89.3%</strong> test accuracy and <strong>0.75</strong> F1 score. Visualised training progress by plotting cost and accuracy per iteration to assess convergence. Conducted a learning rate analysis using values from <strong>0.00001</strong> to <strong>0.5</strong>, tracking cost, accuracy, and F1 score across both training and testing sets.</p>
                                <p>Developed a regression model using scikit-learn’s MLP to predict soybean production from 52,678 samples with 21 features. Standardised inputs and performed model selection via grid search across architectures, activation functions, and iteration counts. The best model used ReLU, (100, 100) layers, and 200 iterations, achieving CV MSE <strong>9.92e-10</strong> (std <strong>1.89e-09</strong>) and test MSE <strong>2.71e-10</strong>, R²<strong> ≈ 1.0</strong>. Used Gradient Boosting to assess feature importance, then ran an experiment by incrementally adding top features to confirm their impact on accuracy. Final model was pipelined with imputation and scaling, trained on the full dataset, saved, and verified for successful execution.</p>

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
                                    <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />
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
                                <p>Implemented a custom histogram generator from scratch in C++ using OpenCV, counting pixel intensities without relying on OpenCV's built-in histogram functions. Drew scaled bar plots for each intensity on a 512×400 image, including vertical grid lines to guide visual threshold selection. Applied this tool to real-world images to assist manual thresholding for segmentation, enabling feature extraction from complex images such as retinal scans and motorway signs. For horizon detection, developed a full pipeline incorporating grayscale conversion, Gaussian blurring, Canny edge detection, and probabilistic Hough line transform. Filtered short and vertical lines, retained approximately horizontal segments, and applied polynomial regression to fit a smooth curve to the horizon. Rendered the resulting horizon line onto the original image for visual verification. Each image required carefully tuned parameters for blur, edge, and Hough thresholds to ensure robustness across diverse sky-ground transitions.</p>
                        </div>
                        <div className={styles.rightTechCard}>
                            <section>
                                <h3>Languages</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" className={styles.badgeImage} />
                                </div>
                            </section>
                            <hr />
                            <section>
                                <h3>Libraries</h3>
                                <div className={styles.badgeRow}>
                                    <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV" className={styles.badgeImage} />
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
                                <p>Built a client-server messaging system in Python to support multi-user communication over sockets. Implemented server-side logic to handle client connections, disconnections, and incoming messages, while maintaining a real-time count of active users. Designed and implemented a custom text-based protocol supporting user registration with unique names, broadcasting to all users, private messaging, listing online users, and clean disconnection. Defined the full protocol in a JSON file and validated it through manual testing. Developed a client that connects to the server, registers a name with retries if needed, accepts user input, sends commands, and cleanly exits after receiving confirmation from the server.</p>
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
                            <h2>BM25 for Retrieval-Augmented Question Answering</h2>
                            <p>Coursework Project | Dec 2024 – Dec 2024</p>
                            <p>
                                Developed a BM25-based text retrieval engine in Python for document ranking and question-answering. Implemented a full pipeline beginning with preprocessing, which normalised input by converting to lowercase, removing punctuation, stripping whitespace, filtering out stopwords, and optionally applying stemming using PyStemmer.
                            </p>
                            <p>
                                For scoring, implemented IDF computation by counting how many documents contained each query term and applying the BM25 IDF formula. Designed and implemented the BM25 scoring function, which evaluated the relevance of each document to a given question using term frequency and document length normalisation.
                            </p>
                            <p>
                                Scored each document in the corpus against the input query using the BM25 formula and returned the top-n highest scoring documents.
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
                                    <img src="https://img.shields.io/badge/PyStemmer-44cc11?style=for-the-badge"/>
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
                            <p>
                                Implemented feature matching techniques for a visual odometry pipeline using Python and OpenCV. Developed three custom matching strategies: a basic distance-based filter, nearest neighbour matching, and nearest neighbour distance ratio (NNDR). Extracted SIFT descriptors from sequences of driving scene images, computed pairwise descriptor distances, and identified valid keypoint correspondences using spatial thresholds and ratio-based checks. Verified implementation by visually inspecting overlaid feature matches across image pairs to ensure consistent and accurate correspondence.
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
                                    <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"/>
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
                                    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
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
                                <hr />
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
