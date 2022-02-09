import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}>
            <Link to="/school">Home</Link> |{" "}
            <Link to="/school/students">Students</Link> |{" "}
            <Link to="/school/courses">Courses</Link>
        </nav>
    );
}

export default Navbar;