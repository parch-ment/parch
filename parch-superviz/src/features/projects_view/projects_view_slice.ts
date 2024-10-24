import { createSlice } from '@reduxjs/toolkit';

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsState {
  projects: Project[];
  selectedProject: Project | null;
}

const initialState: ProjectsState = {
  projects: [
    { id: 1, title: 'Dummy Project 1', description: 'This is a dummy project 1' },
  ],
  selectedProject: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject(state, action) {
      state.selectedProject = action.payload;
    },
  },
});

export const selectProjects = (state: { projects: ProjectsState }) => state.projects.projects;
export const selectSelectedProject = (state: { projects: ProjectsState }) => state.projects.selectedProject;
export const { selectProject } = projectsSlice.actions;
export default projectsSlice.reducer;