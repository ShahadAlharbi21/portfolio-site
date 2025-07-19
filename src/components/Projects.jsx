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
            <div className={styles.ProjectCard}>
                <div className={styles.projectInner}>
                <div className={styles.leftContent}>
                    <h2>Loan Classification and Soybean Yield Prediction</h2>
                    <p>Coursework Project | Mar 2025 – Apr 2025</p>
                    <p>
                   Analyzed and preprocessed loan approval and soybean yield datasets, carefully handling duplicates and standardizing data. Developed a linear classifier trained with gradient descent and L2 regularization, achieving a test-set accuracy of approximately 82% and an F1-score of 0.81, after systematic tuning of learning rates. Conducted an extensive learning rate experiment demonstrating clear convergence trade-offs. Built a Multi-Layer Perceptron regression model to predict soybean yields, optimizing network architecture and activation functions via grid search, resulting in a strong predictive performance with a final Mean Squared Error (MSE) of around 0.22 and an R² score of about 0.88 on test data. Performed a detailed feature-importance analysis with gradient boosting and permutation methods, identifying rainfall and fertilizer usage as the most influential predictors for soybean yield predictions.
                    </p>
                </div>

                <div className={styles.rightTechCard}>
                    <section>
                    <h3>Languages</h3>
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                    </section>
                    <hr />
                    <section>
                    <h3> Libraries</h3>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
                    </section>
                </div>
                </div>
            </div>


            <div className={styles.ProjectCard}>
                <div className={styles.projectInner}>
                <div className={styles.leftContent}>
                    <h2>Loan Classification and Soybean Yield Prediction</h2>
                    <p>Coursework Project | Mar 2025 – Apr 2025</p>
                    <p>
                    A machine learning project for classifying loan approval and predicting soybean yield based on environmental data.
                    </p>
                </div>

                <div className={styles.rightTechCard}>
                    <section>
                    <h3>Languages</h3>
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B" />
                    </section>
                    <hr />
                    <section>
                    <h3>Frameworks</h3>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
                    </section>
                    <hr />
                    <section>
                    <h3>Databases</h3>
                    <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
                    </section>
                    <hr />
                    <section>
                    <h3>Tools</h3>
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                    </section>
                </div>
                </div>
            </div>



            
   </section>


    <Footer/>
    </>
    );
};

export default Projects;