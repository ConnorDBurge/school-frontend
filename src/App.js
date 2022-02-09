import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import StudentPage from './pages/StudentPage';
import CreateStudent from './pages/CreateStudent';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import CreateCourse from './pages/CreateCourse';

const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Navbar Routes */}
                <Route path="school" element={<HomePage />} />
                <Route
                    path="school/students"
                    element={<StudentsPage />} />
                <Route
                    path="school/courses"
                    element={<CoursesPage />} />

                {/* Other Routes */}
                <Route
                    path="school/students/detail/:studentId"
                    element={<StudentPage />} />
                <Route
                    path="school/students/create/"
                    element={<CreateStudent />} />
                <Route
                    path="school/courses/detail/:courseId"
                    element={<CoursePage />} />
                <Route
                    path="school/courses/create/"
                    element={<CreateCourse />} />
            </Routes>
        </Router>
    );
}

export default App;