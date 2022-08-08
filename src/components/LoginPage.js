import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const LoginPage = ({ dispatch, users }) => {

  const [username, setUsername] = useState('sarahedo');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    dispatch(setAuthedUser(username));
    navigate("/");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  return (
    <div>
      <h1 className="center">Employee Polls</h1>
      <img className="center" alt={"logIn"} src="https://www.applauz.me/hubfs/blog_help-center_when-you-should-use-company-polls-on-applauz-fimage-1.jpg"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%"
        }} />
      <h3 className="center">Log In</h3>
      <form className="new-question" onSubmit={handleSubmit}>
        <label>Username</label>
        <select value={username}
          onChange={(e) => handleChange(e)}>
          {
            Object.keys(users).map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })
          }
        </select>
        <button className="btn" type="submit"
          disabled={username === ""}>
          Submit
        </button>
      </form>
    </div>
  );

};

const mapStateToProps = ({ users }) => {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(LoginPage);
