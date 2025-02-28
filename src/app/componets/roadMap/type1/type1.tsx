import { useState } from "react";
import styles from "./WorkExperience.module.scss";

interface ExperienceItem {
  companyName: string;
  position: string;
  description: string[];
  startDate: string;
  endDate: string;
}

interface WorkExperienceProps {
  title?: string;
  titleButtom1?: string;
  titleButtom2?: string;
  experiences: ExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  experiences,
  title,
  titleButtom1,
  titleButtom2,
}) => {
  // Estado para armazenar quais acordeões estão abertos
  const [openAccordions, setOpenAccordions] = useState<number | null>(null);

  // Função para alternar o estado de um acordeão específico
  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.timeline}>
      <h1>{title}</h1>
      {experiences.map((experience, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.header}>
            <h2>{experience.companyName}</h2>
            <h3>{experience.position}</h3>
            <p className={styles.date}>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <div className={styles.accordion}>
            {/* Cabeçalho do Accordion */}
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
            >
              <span className={`${styles.showTitle1} ${openAccordions === index ? styles.hiddenTitle1 : ""}`}>
                {titleButtom1}
              </span>
              <span className={`${styles.hiddenTitle2} ${openAccordions === index ? styles.showTitle2 : ""}`}>
                  {titleButtom2}
              </span>
              
              <span className={`${styles.icon} ${openAccordions === index ? styles.open : ""}`}>
                &#9660;
              </span>
            </button>

            {/* Conteúdo do Accordion */}
            <div
              className={`${styles.accordionContent} ${
                openAccordions === index ? styles.show : ""
              }`}
            >
              <ul className={styles.descriptionList}>
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
