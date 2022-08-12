import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const PageNotFound = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <Nav/>
            <h1>Page not Found 404</h1>
            <Link to="/login">Click here to login</Link>
        </div>
    )
}
export default PageNotFound;