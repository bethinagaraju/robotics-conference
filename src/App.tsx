import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BiotechAgenda from './components/BiotechAgenda';
import AbstractSubmission from './components/AbstractSubmission';
import RegisterPage from './pages/RegisterPage';
import AbstractSubmissionPage from './pages/AbstractSubmissionPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/AbstractSubmission' element={<AbstractSubmissionPage />} />
        
      </Routes>

    </Router>
  );
}

export default App;
 