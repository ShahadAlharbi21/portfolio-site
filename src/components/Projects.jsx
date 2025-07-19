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
                            <h2>Loan Classification and Soybean Yield Prediction</h2>
                            <p>Coursework Project | Mar 2025 – Apr 2025</p>
                            <p>
                                Analyzed and preprocessed loan approval and soybean yield datasets, carefully handling duplicates and standardizing data. Developed a linear classifier trained with gradient descent and L2 regularization, achieving a test-set accuracy of approximately 82% and an F1-score of 0.81. Built a Multi-Layer Perceptron regression model to predict soybean yields with a final MSE of 0.22 and R² of 0.88. Identified rainfall and fertilizer usage as the most influential predictors using feature-importance techniques.
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
                                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
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
