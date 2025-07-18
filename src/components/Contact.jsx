import React from 'react';
import styles from './StyleSheet.module.css';
import githubDark from '../assets/github-dark.svg';
import email from '../assets/mailboxdotorg.svg';
import NavBar from './NavBar';
import Footer from './Footer';

function Contact(){
    return(<>
    <NavBar/>
    <div className={styles.ContactCard}>
        <h1>Contact Details</h1>
    </div>
        <section className={styles.ContactCardSection}>
        <span>
            <a href='https://github.com/ShahadAlharbi21' target="_blank" rel="noopener noreferrer">
            <img src={githubDark} alt='Github icon' />
            </a>
            <div className={styles.ImgH}>
            <h3>Github</h3>
            </div>
        </span>

        <span>
            <a href="mailto:shahad_100hr@outlook.com " target="_blank " rel="noopener noreferrer">
            <img src={email} alt="Email Logo" style={{ width: '64px', height: '64px' }} />
            </a>
            <div className={styles.ImgH}>
            <h3>Email</h3>
            </div>
        </span>
        </section>
        <Footer/>
    </>
    );
};

export default Contact;