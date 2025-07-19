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
        </div>
    </section>

    <Footer/>
</>
);
};

export default Certificates;
