// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectCards from './components/project_cards';
import { OrganizedCanvasView } from './features/organized_canvas_view/organized_canvas_view';
import { LoginPage } from './features/user_onboarding/user_login'
import { RegisterPage } from './features/user_onboarding/user_register'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user_register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/projects_view" element={<ProjectCards />} />
        <Route path="/organized_canvas_view" element={<OrganizedCanvasView />} />
      </Routes>
    </Router>
  );
};

export default App;
