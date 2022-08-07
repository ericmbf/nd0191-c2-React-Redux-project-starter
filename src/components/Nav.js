import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser"

const Nav = (props) => {

    const { name, avatar } = props;

    const handleLogOut = (e) => {
        e.preventDefault();
        props.dispatch(setAuthedUser(null));
        Navigate('/');
    }

    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/new">New</Link>
            <div className="topnav-right">
                <a>
                    {avatar && (
                        <img className="topnav-avatar" src={props.avatar} />)}
                    <span>{name}</span>
                </a>
            <a onClick={handleLogOut} >Logout</a>
            </div>
        </div>
    );
};

function mapStateToProps({ users, authedUser }) {
    return {
        name: authedUser ? authedUser : null,
        avatar: authedUser && users ? users[authedUser].avatarURL : null
    }
}

export default connect(mapStateToProps)(Nav);
