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
      "Collaborated on processing and analysing 30,000 premise–hypothesis pairs for natural language inference.",
      "Built an SVM with TF-IDF and linguistic features, achieving 0.6379 Macro-F1, 5% above baseline.",
      "Fine-tuned DeBERTa-v3-large with hyperparameter tuning and early stopping, achieving 0.9187 Macro-F1.",
      "Explored mean pooling and layer-wise learning rate decay (LLRD) during transformer fine-tuning."
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
          "Scikit-learn"
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
      "Developed multi-label text classification across 8 movie genres using movie titles and plot synopses.",
      "Built a bidirectional LSTM and fine-tuned RoBERTa-base and DeBERTa-v3-large transformer models.",
      "Applied class-weighted binary cross-entropy loss and optimized class-specific decision thresholds.",
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
          "Scikit-learn",
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
      "Contributed to developing a competitive Hex agent using Monte Carlo Tree Search (MCTS).",
      "Implemented Zobrist hashing and transposition tables to optimise search and reuse game states.",
      "Integrated team-developed RAVE, Union-Find win detection, move ordering, and endgame heuristics.",
      "Achieved a 94% win rate against the baseline in 100 games; automated matches and log parsing with Bash."
    ],
    "groups": [
      [
        "Programming Languages",
        [
          "Python",
          "Bash"
        ]
      ],
      [
        "Tools & Technologies",
        [
          "Git"
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
          "HTML",
          "CSS"
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
    "date": "Apr 2025– May 2025",
    "bullets": [
      "Developed a Python booking application integrating hotel and band services through REST APIs.",
      "Implemented reservations, cancellations, and automated earliest-slot matching across both services.",
      "Added input validation, server-error retries, and request throttling to improve API reliability.",
      "Handled HTTP errors and failed bookings, automatically cancelling incomplete or unmatched reservations."
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
