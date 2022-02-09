import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentsPage from './pages/StudentsPage';
import StudentPage from './pages/StudentPage';
import CreateStudent from './pages/CreateStudent';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import HomePage from './pages/HomePage';

const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Navbar Routes */}
                <Route path="" element={<HomePage />} />
                <Route
                    path="students"
                    element={<StudentsPage />} />
                <Route
                    path="courses"
                    element={<CoursesPage />} />

                {/* Other Routes */}
                <Route
                    path="students/detail/:studentId"
                    element={<StudentPage />} />
                <Route
                    path="students/create/"
                    element={<CreateStudent />} />
                <Route
                    path="courses/detail/:courseId"
                    element={<CoursePage />} />
            </Routes>
        </Router>
    );
}

export default App;