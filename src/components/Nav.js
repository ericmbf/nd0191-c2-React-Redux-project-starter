import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/new">New</Link>
            <div className="topnav-right">
                <Link to="/user/:id">User</Link>
                <Link to="/login">Logout</Link>
            </div>
        </div>
    );
};

export default Nav;
