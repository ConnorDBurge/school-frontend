
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import CoursesAPI from '../api/CoursesAPI';

const CreateCourse = () => {

    const [courseSubmitted, setCourseSubmitted] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const course = {
            'course_id': `${event.target.course_id.value}`,
            'course_name': `${event.target.course_name.value}`
        }
        const response = await CoursesAPI.addCourse(course);
        if (response.status === 200) {
            setCourseSubmitted(true);
        }
    }

    return (
        <div>
            <h1 className="m-3">Create Course</h1>
            {courseSubmitted
                ? <Alert variant="success" >Course Successfully Created</Alert>
                : <Form className="m-3" onSubmit={(e) => handleFormSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course ID</Form.Label>
                        <Form.Control type="text" placeholder="Course ID" name='course_id' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Course Name" name='course_name' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>}
        </div>
    );
}

export default CreateCourse;