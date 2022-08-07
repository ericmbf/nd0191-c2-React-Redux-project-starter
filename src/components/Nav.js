import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {

    const { name, avatar } = props;

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
                <Link to="/login">Logout</Link>
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
