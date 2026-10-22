import github from '../assets/github-light.svg';
import styles from './StyleSheet.module.css';
const assets = {
  "Python": {
    "src": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B",
    "href": "https://docs.python.org/3/"
  },
  "Java": {
    "src": "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white",
    "href": "https://docs.oracle.com/en/java/"
  },
  "PyTorch": {
    "src": "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
    "href": "https://pytorch.org/docs/stable/"
  },
  "TensorFlow": {
    "src": "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
    "href": "https://www.tensorflow.org/api_docs"
  },
  "Scikit-Learn": {
    "src": "https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
    "href": "https://scikit-learn.org/stable/user_guide.html"
  },
  "Transformers": {
    "src": "https://img.shields.io/badge/Transformers-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black",
    "href": "https://huggingface.co/docs/transformers"
  },
  "Pandas": {
    "src": "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
    "href": "https://pandas.pydata.org/docs/"
  },
  "NumPy": {
    "src": "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
    "href": "https://numpy.org/doc/"
  },
  "OpenCV": {
    "src": "https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white",
    "href": "https://docs.opencv.org/master/"
  },
  "Matplotlib": {
    "src": "https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white",
    "href": "https://matplotlib.org/stable/users/index.html"
  },
  "Git": {
    "src": "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    "href": "https://git-scm.com/doc"
  },
  "PHP": {
    "src": "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    "href": "https://www.php.net/docs.php"
  },
  "JavaScript": {
    "src": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000",
    "href": "https://developer.mozilla.org/docs/Web/JavaScript"
  },
  "HTML5": {
    "src": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "href": "https://developer.mozilla.org/docs/Web/HTML"
  },
  "CSS3": {
    "src": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "href": "https://developer.mozilla.org/docs/Web/CSS"
  },
  "MySQL": {
    "src": "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    "href": "https://dev.mysql.com/doc/"
  },
  "NLTK": {
    "src": "https://img.shields.io/badge/NLTK-154F6B?style=for-the-badge",
    "href": "https://www.nltk.org/"
  },
  "Datasets": {
    "src": "https://img.shields.io/badge/Datasets-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black",
    "href": "https://huggingface.co/docs/datasets"
  },
  "random": {
    "src": "https://img.shields.io/badge/random-7C3AED?style=for-the-badge",
    "href": "https://docs.python.org/3/library/random.html"
  },
  "math": {
    "src": "https://img.shields.io/badge/math-059669?style=for-the-badge",
    "href": "https://docs.python.org/3/library/math.html"
  },
  "time": {
    "src": "https://img.shields.io/badge/time-2563EB?style=for-the-badge",
    "href": "https://docs.python.org/3/library/time.html"
  }
};
export default function TechBadges({ names }) {
  return <div className={styles.badgeRow}>{names.map(name => {
    const asset = assets[name];
    if (asset) return <a key={name} href={asset.href} target="_blank" rel="noopener noreferrer"><img src={asset.src} alt={name === 'Scikit-Learn' ? 'Scikit-learn' : name} loading="lazy" /></a>;
    if (name === 'GitHub') return <a key={name} className="text-technology" href="https://github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt="" />GitHub</a>;
    return <span key={name} className="text-technology">{name}</span>;
  })}</div>;
}
