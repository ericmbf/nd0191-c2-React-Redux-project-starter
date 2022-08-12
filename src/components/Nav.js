import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser"
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const Nav = (props) => {

    const { authed, logout } = useAuth();
    const { name, avatar } = props;
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        props.dispatch(setAuthedUser(null));
        logout();
        navigate("/login");
    }

    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/add">New</Link>
            <div className="topnav-right">
                <a>
                    {avatar && (
                        <img className="topnav-avatar" alt="avatar" src={props.avatar} />)}
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
