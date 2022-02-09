import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesAPI from '../api/CoursesAPI';

const CoursePage = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = () => {
            CoursesAPI.fetchCourses()
                .then((response) => {
                    setCourses(response)
                });
        }
        getCourses()
    }, []);

    const renderedCourses = courses.map((course, index) => {
        return (
            <h1 key={index}>
                <Link to={`/school/courses/detail/${course.id}`}>
                    {course.course_id}: {course.course_name}
                </Link>
            </h1>
        )
    })

    return (
        <div>
            <h1>Course Page</h1>
            <Link to="/school/courses/create">Create New Course</Link>
            {renderedCourses}
        </div>
    );
}

export default CoursePage;