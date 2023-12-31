import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage';
import StudyGuide from './Pages/Guide/StudyGuide';
import ExamWrapper from './Pages/Exam/ExamWrapper';

const App: React.FC = () => {
    return (
        <HashRouter basename="/plazop">
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/guia" element={<StudyGuide/>} />
                <Route path="/examen" element={<ExamWrapper/>} />
            </Routes>
        </HashRouter>
    );
};

export default App;
