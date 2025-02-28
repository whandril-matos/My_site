import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectsShowcase.module.scss";


interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  repoLink: string;
  liveLink: string;
  
}

interface ProjectsShowcaseProps {
  title: string;
  button1: string;
  button2: string;
  close: string;
  projects: Project[];
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ title, button1, button2, close, projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // 🔒 Bloqueia a rolagem quando o modal está aberto
    } else {
      document.body.style.overflow = "auto"; // 🔓 Restaura a rolagem quando o modal fecha
    }

    return () => {
      document.body.style.overflow = "auto"; // Garante que a rolagem volte ao normal ao desmontar
    };
  }, [selectedProject]);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => setSelectedProject(project)}
          > 
            <div className={styles.scopeImage}>
              <Image src={project.image} width={1000} height={1000} alt={project.title} />
            </div>
            
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Pop-up Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.scopeModal}> 
              <Image src={selectedProject.image} width={1000} height={1000} alt={selectedProject.title} />
            </div>
            <div>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <div className={styles.buttons}>
                <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer">
                    {button1}
                </a>
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                    {button2}
                </a>
                </div>
                <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                {close}
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsShowcase;
