import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from './StyleSheet.module.css';

function Certificates() {
return ( 
<>
    <NavBar/>
    
    <section className={styles.projectsSection}>
        <h1>Certificates</h1>
        <div className={styles.CourseCard}>
            <h2>Supervised Machine Learning: Regression and Classification</h2>
        </div>
    </section>

    <Footer/>
</>
);
};

export default Certificates;
