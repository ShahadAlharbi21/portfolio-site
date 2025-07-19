import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from './StyleSheet.module.css';

function Certificates() {
return ( 
<>
    <NavBar/>
    
    <section className={styles.CertificatesSection}>
        <h1>Certificates</h1>
        <div className={styles.CourseCard}>
            <h2>Supervised Machine Learning: Regression and Classification</h2>
            <p><em>Offered by DeepLearning.AI on Coursera</em></p>
            <ul>
                <li>Learnt to distinguish between <strong>regression</strong> and <strong>classification</strong> tasks within supervised learning.</li>
                <li>Built and implemented <strong>linear regression</strong> and <strong>logistic regression</strong> models using Python.</li>
                <li>Used error metrics (e.g., <strong>mean squared error</strong>, <strong>accuracy</strong>, <strong>precision</strong>, and <strong>recall</strong>) to assess model performance.</li>
                <li>Applied <strong>regularisation techniques</strong> such as <strong>Ridge</strong> and <strong>LASSO</strong> to prevent overfitting and improve generalisation.</li>
                <li>Employed <strong>train/test splits</strong> and <strong>cross-validation</strong> to validate model performance.</li>
            </ul>
            <div className={styles.buttonDesign}>
                <a href = "/portfolio-site/Coursera_ML_Certificate.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
        </div>


        <div className={styles.CourseCard2}>
            <h2> Advanced Learning Algorithms</h2>
            <p><em>Offered by DeepLearning.AI on Coursera</em></p>
            <ul>
                <li>Built and trained a neural network with TensorFlow to perform multi-class classification.</li>
                <li>Applied best practices for machine learning development so that models generalise to data and tasks in the real world.</li>
                <li>Built and used decision trees for classification and regression tasks.</li>
                <li>Applied tree ensemble methods, including random forests and boosted trees.</li>
            </ul>
            <div className={styles.buttonDesign}>
                <a href = "/portfolio-site/Coursera_Deep_Learning_Ceritificate.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
        </div>



        <div className={styles.CourseCard3}>
            <h2>Student Hackathon 2025</h2>
            <p><em>Offered by The University of Manchester</em></p>
            <ul>
                <li>Collaborated in a team of 4 to build a simple tool that assists people with visual impairments in daily tasks using the Neuphonic library.</li>
            </ul>
            <div className={styles.buttonDesign}>
                <a href = "/portfolio-site/Hackathon_Certificate.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
        </div>
    </section>

    <Footer/>
</>
);
};

export default Certificates;
