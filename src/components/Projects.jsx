import ProjectVisual from './ProjectVisual';
import TechBadges from './TechBadges';
import styles from './StyleSheet.module.css';

const projects = [
  {
    "id": "nli",
    "title": "Natural Language Inference",
    "type": "Team Project",
    "date": "Apr 2026",
    "bullets": [
      "Collaborated in a team to model approximately 30,000 premise\u2013hypothesis pairs for natural language inference.",
      "Contributed to an SVM using TF-IDF and handcrafted linguistic features, achieving 0.6379 Macro-F1.",
      "Fine-tuned DeBERTa-v3-large with hyperparameter tuning, achieving 0.9187 Macro-F1.",
      "Evaluated models using Macro-F1 and explored mean pooling and layer-wise learning rate decay (LLRD)."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "Python"
        ]
      ],
      [
        "Libraries & Frameworks",
        [
          "PyTorch",
          "Transformers",
          "Scikit-Learn",
          "Pandas",
          "NumPy",
          "NLTK"
        ]
      ]
    ]
  },
  {
    "id": "stereo",
    "title": "Stereo Vision and 3D Scene Reconstruction",
    "type": "Solo Project",
    "date": "Jun 2026",
    "bullets": [
      "Developed stereo vision pipelines for disparity-based depth estimation and 3D scene reconstruction.",
      "Generated 3D point clouds from stereo disparity, comparing dense grayscale and edge-focused Canny reconstruction.",
      "Built selective focus using disparity-based depth masks, morphological operations, and Gaussian background blurring.",
      "Tuned disparity, block size, depth offset, and threshold parameters through interactive OpenCV controls."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "Python"
        ]
      ],
      [
        "Libraries & Frameworks",
        [
          "OpenCV",
          "NumPy",
          "Matplotlib"
        ]
      ]
    ]
  },
  {
    "id": "movies",
    "title": "Movie Genre Classification with Neural Models",
    "type": "Solo Project",
    "date": "Dec 2025",
    "bullets": [
      "Developed multi-label text classification across eight movie genres using movie titles and plot synopses.",
      "Built a bidirectional LSTM and fine-tuned RoBERTa-base and DeBERTa-v3-large transformer models.",
      "Applied class-weighted binary cross-entropy loss and optimised class-specific decision thresholds.",
      "Evaluated models using weighted F1, achieving a best score of 0.5979 on unseen data."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "Python"
        ]
      ],
      [
        "Libraries & Frameworks",
        [
          "PyTorch",
          "Transformers",
          "Datasets",
          "Scikit-Learn",
          "Pandas",
          "NumPy",
          "NLTK"
        ]
      ]
    ]
  },
  {
    "id": "hex",
    "title": "Hex AI Agent",
    "type": "Team Project",
    "date": "Dec 2025",
    "bullets": [
      "Collaborated in a team to develop a Hex AI agent using Monte Carlo Tree Search (MCTS).",
      "Enhanced search efficiency using RAVE statistics, Zobrist hashing, and heuristic-guided search.",
      "Used Union-Find for efficient connectivity checking and winner detection.",
      "Achieved a 94% win rate across 100 games against the baseline."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "Python"
        ]
      ],
      [
        "Libraries & Frameworks",
        [
          "random",
          "math",
          "time"
        ]
      ]
    ]
  },
  {
    "id": "employees",
    "title": "Kilburnazon Employee Management System",
    "type": "Solo Project",
    "date": "Dec 2024",
    "bullets": [
      "Developed a full-stack employee management system for employee records, leave, and payroll reporting.",
      "Implemented SQL-based CRUD operations, multi-field employee search, authentication, and input validation.",
      "Built leave approval workflows, holiday tracking, and payroll reports with PDF and CSV exports.",
      "Created a MySQL trigger to archive employee records and payroll details upon deletion."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "PHP",
          "JavaScript",
          "HTML5",
          "CSS3"
        ]
      ],
      [
        "Databases",
        [
          "MySQL"
        ]
      ]
    ]
  },
  {
    "id": "booking",
    "title": "Distributed Booking System",
    "type": "Solo Project",
    "date": "Apr\u2013May 2025",
    "bullets": [
      "Developed a distributed booking application using REST APIs for real-time availability and reservations.",
      "Implemented reservation, cancellation, and earliest-slot matching across distributed service endpoints.",
      "Added input validation, retry handling, and rate limiting to improve reliability across API interactions.",
      "Handled service failures and invalid responses to maintain consistent application behaviour."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "Python"
        ]
      ],
      [
        "Other Technologies",
        [
          "REST APIs"
        ]
      ]
    ]
  }
];

export default function Projects() {
  return <section id="projects" className={styles.projectsSection} aria-labelledby="projects-heading">
    <div className="section-heading"><h2 id="projects-heading">Projects</h2></div>
    {projects.map(project => <article key={project.id} data-project={project.id} className={styles.ProjectCard} aria-labelledby={`${project.id}-title`}>
      <div className={`${styles.projectInner} project-layout`}>
        <ProjectVisual project={project.id} />
        <div className={`${styles.leftContent} project-details`}>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-meta">{project.type} | {project.date}</p>
          <ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          <div className={styles.rightTechCard}>{project.groups.map(([heading, names]) => <div key={heading}><h4>{heading}</h4><TechBadges names={names} /></div>)}</div>
        </div>
      </div>
    </article>)}
  </section>;
}
