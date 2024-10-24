// src/components/ProjectCards.tsx
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { selectProjects } from '../features/projects_view/projects_view_slice';
import { useNavigate } from 'react-router-dom';

const ProjectCards: React.FC = () => {
    const projects = useSelector((state: RootState) => selectProjects(state));
    const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
    const navigate = useNavigate();
  
    const handleCardClick = (project: typeof projects[number]) => {
        setSelectedProject(project);
        navigate("/organized_canvas_view")
      };

      return (
        <div style={styles.container}>
          {projects.map((project) => (
            <button
              key={project.id}
              style={styles.card}
              onClick={() => handleCardClick(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </button>
          ))}
        </div>
      );
  };
  
const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '200px',
    textAlign: 'center' as const,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
    },
  },
};

export default ProjectCards;
