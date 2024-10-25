// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectCards from './components/project_cards';
import { OrganizedCanvasView } from './features/organized_canvas_view/organized_canvas_view';
import { LoginPage } from './features/user_onboarding/user_login'
import { RegisterPage } from './features/user_onboarding/user_register'
import { OpenCanvasView } from './features/open_canvas_view/open_canvas_view';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/open_canvas_view" element={<OpenCanvasView />} />
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/user_register" element={<RegisterPage />} />
        <Route path="/projects_view" element={<ProjectCards />} />
        <Route path="/organized_canvas_view" element={<OrganizedCanvasView />} />
      </Routes>
    </Router>
  );
};

export default App;
