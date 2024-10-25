// src/components/ProjectCards.tsx
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { curr_projects_list, curr_chosen_project, selectProject, addProject } from '../features/projects_view/projects_view_slice';
import { useNavigate } from 'react-router-dom';
import { Project } from '../features/projects_view/projects_view_slice';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCards: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const curr_projects = useSelector((state: RootState) => curr_projects_list(state));
    const chosen_project = useSelector((state: RootState) => curr_chosen_project(state))
  
    const handleCardClick = (project: Project) => {
      dispatch(selectProject(project));
      window.location.href = "/GLB-Viewer/index.html"; 
      
    };
    

      return (
        <div style={styles.container}>
          {curr_projects.map((project) => (
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
