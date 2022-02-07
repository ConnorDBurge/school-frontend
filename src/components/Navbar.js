import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}>
            <Link to="">Home</Link> |{" "}
            <Link to="/students">Students</Link> |{" "}
            <Link to="/courses">Courses</Link>
        </nav>
    );
}

export default Navbar;