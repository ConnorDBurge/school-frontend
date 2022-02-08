import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import StudentsAPI from '../api/StudentsAPI';

const StudentPage = () => {

    const [student, setStudent] = useState(null)

    const { studentId } = useParams()
    useEffect(() => {
        StudentsAPI.fetchStudent(studentId)
            .then((response) => {
                setStudent(response);
            })
    }, [])

    const renderedCourses = student && student.courses.map((course, index) => {
        return (
            <h1 key={index}>
                <Link to={`/courses/detail/${course.id}`} key={index}>{course.course_id}: {course.course_name}</Link>
            </h1>
        )
    })

    return (
        <div>
            {!student
                ? null
                : <div>
                    <h1>{student.first_name} {student.last_name}</h1>
                    {renderedCourses}
                </div>}
        </div>
    );
}

export default StudentPage;