import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import StudentsAPI from '../api/StudentsAPI';

const StudentPage = () => {

    const [student, setStudent] = useState(null)
    const [message, setMessage] = useState('')
    const { studentId } = useParams()

    useEffect(() => {
        StudentsAPI.fetchStudent(studentId)
            .then((response) => {
                setStudent(response);
            })
    }, [])

    const deleteStudent = () => {
        StudentsAPI.deleteStudent(studentId)
            .then((response) => {
                setMessage(response.message);
            })
    }

    const renderedCourses = student && student.courses.map((course, index) => {
        return (
            <h1 key={index}>
                <Link to={`/school/courses/detail/${course.id}`} key={index}>{course.course_id}: {course.course_name}</Link>
            </h1>
        )
    })

    return (
        <div>
            {message !== ''
                ? <div>
                    <Link to='/school/students'>Back to Students</Link>
                    <h3>{message}</h3>
                </div>
                : <div>
                    <button onClick={deleteStudent}>Delete Student</button>
                    <button><Link to={`/school/students/enroll/${studentId}`}>Enroll in Class</Link></button>
                    {!student
                        ? null
                        : <div>
                            <h1>{student.first_name} {student.last_name}</h1>
                            {renderedCourses}
                        </div>}
                </div>}
        </div>
    );
}

export default StudentPage;