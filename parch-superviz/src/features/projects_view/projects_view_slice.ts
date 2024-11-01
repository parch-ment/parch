import { createSlice } from '@reduxjs/toolkit';

export interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsState {
  projects: Project[];
  chosenProject: Project | null;
}

const initialState: ProjectsState = {
  projects: [
    { id: 1, title: 'Hospital', description: 'This is an awesome hospital, it is awesome' },
    { id: 2, title: 'School', description: 'This is a great school it is the best' },
  ],
  chosenProject: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    selectProject(state, action) {
      state.chosenProject = action.payload;
    },
  },
});

export const curr_projects_list = (state: { projects: ProjectsState }) => state.projects.projects;
export const curr_chosen_project = (state: { projects: ProjectsState }) => state.projects.chosenProject;
export const { addProject, selectProject } = projectsSlice.actions;
export default projectsSlice.reducer;