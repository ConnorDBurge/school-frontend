import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StudentsPage from './pages/StudentsPage';
import StudentPage from './pages/StudentPage';
import CoursesPage from './pages/CoursesPage'
import HomePage from './pages/HomePage';

const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route
                    path="students"
                    element={<StudentsPage />} />
                <Route
                    path="students/detail/:studentId"
                    element={<StudentPage />} />
                <Route
                    path="courses"
                    element={<CoursesPage />} />
            </Routes>
        </Router>
    );
}

export default App;