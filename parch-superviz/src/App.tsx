// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectCards from './components/project_cards';
import { OrganizedCanvasView } from './features/projects_view/organized_canvas_view/organized_canvas_view';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectCards />} />
        <Route path="/organized_canvas_view" element={<OrganizedCanvasView />} />
      </Routes>
    </Router>
  );
};

export default App;
