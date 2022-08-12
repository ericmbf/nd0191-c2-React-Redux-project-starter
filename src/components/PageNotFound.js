import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
    render() {
        return <div>
            <p style={{ textAlign: "center" }}>
                <h1>Page not Found 404</h1>
                <Link to="/login">Click here to login</Link>
            </p>
        </div>;
    }
}
export default PageNotFound;