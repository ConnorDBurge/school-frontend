import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import StudentsAPI from '../api/StudentsAPI';

const CreateStudent = () => {

    const [studentSubmitted, setStudentSubmitted] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const student = {
            'first_name': `${event.target.first_name.value}`,
            'last_name': `${event.target.last_name.value}`
        }
        const response = await StudentsAPI.addStudent(student);
        if (response.status === 200) {
            setStudentSubmitted(true);
        }
    }

    return (
        <div>
            <h1 className="m-3">Create Student</h1>
            {studentSubmitted
                ? <Alert variant="success" >Student Successfully Created</Alert>
                : <Form className="m-3" onSubmit={(e) => handleFormSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name='first_name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name='last_name' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>}
        </div>
    );
}

export default CreateStudent;