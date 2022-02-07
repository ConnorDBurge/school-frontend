import React from 'react';
import { useParams } from "react-router-dom";

const StudentPage = (props) => {

    const { studentId } = useParams()

    return (
        <div>
            <h1></h1>
        </div>
    );
}

export default StudentPage;