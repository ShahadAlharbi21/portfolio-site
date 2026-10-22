import styles from './StyleSheet.module.css';
import TechBadges from './TechBadges';
const groups = [
  ['Programming Languages', ['Python', 'Java', 'SQL']],
  ['AI & Machine Learning', ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Transformers']],
  ['Data & Computer Vision', ['Pandas', 'NumPy', 'OpenCV', 'Matplotlib']],
  ['Software Development', ['REST APIs', 'Git', 'GitHub']],
];
export default function Skills() {
  return <section id="skills" className={styles.skillsSection} aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="plain-section-title">Skills</h2>
    <div className={styles.skillsCard}>{groups.map(([heading, names]) => <div key={heading} className={styles.skillGroup}><h3>{heading}</h3><TechBadges names={names} /></div>)}</div>
  </section>;
}
