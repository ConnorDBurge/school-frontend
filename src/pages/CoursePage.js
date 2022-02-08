import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import CoursesAPI from '../api/CoursesAPI';

const CoursePage = () => {

    const [course, setCourse] = useState(null)

    const { courseId } = useParams()
    useEffect(() => {
        CoursesAPI.fetchCourse(courseId)
            .then((response) => {
                setCourse(response);
            })
    }, [])

    const renderedStudents = course && course.students.map((student, index) => {
        return (
            <h1 key={index}>
                <Link to={`/students/detail/${student.id}`}>{student.first_name} {student.last_name}</Link>
            </h1>
        )
    })

    return (
        <div>
            {!course
                ? null
                : <div>
                    <h1>{course.course_id}: {course.course_name}</h1>
                    {renderedStudents}
                </div>}
        </div>
    );
}

export default CoursePage;