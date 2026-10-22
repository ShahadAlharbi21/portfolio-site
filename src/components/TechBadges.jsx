import github from '../assets/github-light.svg';
import styles from './StyleSheet.module.css';
const assets = {
  "Python": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/python.svg`,
    "href": "https://docs.python.org/3/"
  },
  "Java": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/java.svg`,
    "href": "https://docs.oracle.com/en/java/"
  },
  "PyTorch": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/pytorch.svg`,
    "href": "https://pytorch.org/docs/stable/"
  },
  "TensorFlow": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/tensorflow.svg`,
    "href": "https://www.tensorflow.org/api_docs"
  },
  "Scikit-Learn": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/scikit-learn.svg`,
    "href": "https://scikit-learn.org/stable/user_guide.html"
  },
  "Transformers": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/transformers.svg`,
    "href": "https://huggingface.co/docs/transformers"
  },
  "Pandas": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/pandas.svg`,
    "href": "https://pandas.pydata.org/docs/"
  },
  "NumPy": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/numpy.svg`,
    "href": "https://numpy.org/doc/"
  },
  "OpenCV": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/opencv.svg`,
    "href": "https://docs.opencv.org/master/"
  },
  "Matplotlib": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/matplotlib.svg`,
    "href": "https://matplotlib.org/stable/users/index.html"
  },
  "Git": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/git.svg`,
    "href": "https://git-scm.com/doc"
  },
  "PHP": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/php.svg`,
    "href": "https://www.php.net/docs.php"
  },
  "JavaScript": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/javascript.svg`,
    "href": "https://developer.mozilla.org/docs/Web/JavaScript"
  },
  "HTML5": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/html5.svg`,
    "href": "https://developer.mozilla.org/docs/Web/HTML"
  },
  "CSS3": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/css3.svg`,
    "href": "https://developer.mozilla.org/docs/Web/CSS"
  },
  "MySQL": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/mysql.svg`,
    "href": "https://dev.mysql.com/doc/"
  },
  "NLTK": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/nltk.svg`,
    "href": "https://www.nltk.org/"
  },
  "Datasets": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/datasets.svg`,
    "href": "https://huggingface.co/docs/datasets"
  },
  "random": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/random.svg`,
    "href": "https://docs.python.org/3/library/random.html"
  },
  "math": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/math.svg`,
    "href": "https://docs.python.org/3/library/math.html"
  },
  "time": {
    "src": `${import.meta.env.BASE_URL.replace(/\/$/, '')}/technology/time.svg`,
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
