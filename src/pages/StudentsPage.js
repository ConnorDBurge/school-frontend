import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentsAPI from '../api/StudentsAPI';

const StudentPage = () => {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        const getStudents = () => {
            StudentsAPI.fetchStudents()
                .then((response) => {
                    setStudents(response)
                });
        }
        getStudents()
    }, []);

    const renderedStudents = students.map((student, index) => {
        return (
            <h1 key={index}>
                <Link to={`/school/students/detail/${student.id}`}>
                    {student.first_name} {student.last_name}
                </Link> - Courses {student.courses.length}
            </h1>
        )
    })

    return (
        <div>
            <h1>Students</h1>
            <Link to="/school/students/create">Create New Student</Link>
            {renderedStudents}
        </div>
    );
}

export default StudentPage;