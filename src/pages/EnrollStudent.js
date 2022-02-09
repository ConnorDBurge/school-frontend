import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoursesAPI from '../api/CoursesAPI';
import StudentsAPI from '../api/StudentsAPI';

const EnrollStudent = () => {

    const [courses, setCourses] = useState([])
    const [student, setStudent] = useState(null)
    const [message, setMessage] = useState('')
    const [selectedCourse, setSelectedCourse] = useState(0)
    const { studentId } = useParams()

    useEffect(() => {
        CoursesAPI.fetchCourses()
            .then((response) => {
                setCourses(response);
            })
        StudentsAPI.fetchStudent(studentId)
            .then((response) => {
                setStudent(response);
            })
    }, [])

    const enrollStudent = (e) => {
        e.preventDefault();
        StudentsAPI.enrollStudent(studentId, selectedCourse)
            .then((response) => {
                setMessage(response.message);
            })
    }

    return (
        <div>
            <div>Enroll Student Form</div>
            <form onSubmit={enrollStudent}>
                <select onChange={(e) => setSelectedCourse(e.target.value)}>
                    <option defaultValue={""}>Choose a course</option>
                    {courses.map((option, index) =>
                        <option key={index} value={option.id}>
                            {option.course_name}
                        </option>
                    )}
                </select>
                <button>Enroll</button>
            </form>
            {message !== ''
                ? <h1>{message}</h1>
                : null}
        </div>
    );
}

export default EnrollStudent;