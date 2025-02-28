// components/TechList.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import styles from './TechList.module.scss';

interface TechItem {
  name: string;
  iconName: string;
}

interface TechListProps {
    title?: string;
    techs: TechItem[];
}

// Mapeamento de strings para ícones
const iconMap: { [key: string]: IconType } = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  SCSS: FaSass,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  'Next.js': SiNextdotjs,
  'Node.js': FaNodeJs,
  Python: FaPython,
};

const TechList: React.FC<TechListProps> = ({ techs, title }) => {
  return (
        <>  
            
            <div className={styles.techListTitle}><h1>{title}</h1></div>
            <div className={styles.techList}>
                {techs.map((tech, index) => {
                    const IconComponent = iconMap[tech.iconName];
                    return (
                        <div key={index} className={styles.techItem}>
                            
                            {IconComponent ? <IconComponent className={styles.icon} /> : null}
                            <span>{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </>
    
  );
};

export default TechList;