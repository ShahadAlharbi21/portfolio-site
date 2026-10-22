import styles from './StyleSheet.module.css';
export default function Footer() {
  return <footer className={styles.footer}>
    <a className="wordmark" href="#home" aria-label="Shahad Alharbi home">s<span>.</span>a</a>
    <span>© {new Date().getFullYear()} Shahad Alharbi</span>
    <a href="https://github.com/ShahadAlharbi21" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="mailto:shahad_100hr@outlook.com">Email</a>
  </footer>;
}
