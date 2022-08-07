import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const LoginPage = ({dispatch, users}) => {

  const [username, setUsername] = useState('sarahedo');
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const getValidUser = (username, password) => {
    let validUser = null;
    
    Object.keys(users).map(id => {
      if(users[id].id == username && 
        users[id].password == password){
          validUser = users[id];
          return
        }
    });

    return validUser;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let validUser = getValidUser(username, password);

    if(validUser !== null){
      setUsername("");
      setPassword("");
      dispatch(setAuthedUser(validUser.id));
      navigate("/");
    }
    else{
      setError(true);
    }
  }
  
  const handleChange = (e) => {

    setError(false);
    e.preventDefault();

    if(e.target.name === "username"){
      setUsername(e.target.value);
    }
    else{
      setPassword(e.target.value);
    }
  }


  const formIsCompleted = 280 - username.length;

  return <div>
            <h1 className="center">Employee Polls</h1>
            <img className="center" src="https://www.applauz.me/hubfs/blog_help-center_when-you-should-use-company-polls-on-applauz-fimage-1.jpg"
             style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%"
            }
            }/>
            <h3 className="center">Log In</h3>
            <form className="new-question" onSubmit={handleSubmit}>
              <label>Username</label>
              <input className="input-user"
                placeholder="Put your username here"
                value={username}
                onChange={handleChange}
                name="username"
                />
              <label className="label-user">Password</label>
              <input className="input-user"
                placeholder="Put your password here"
                value={password}
                onChange={handleChange}
                name="password"
              />
              {formIsCompleted <= 100 && 
                (<div className="tweet-length">{formIsCompleted}</div>)}
              <button className="btn" type="submit" 
                      disabled={username === "" ||
                                password === ""}>
                Submit
              </button>
            {error &&
                <h3 data-testid="error-header" className="error-user">
                  Invalid user or password.
                </h3>
            }
            </form>
         </div>;
};

const mapStateToProps = ({users}) => {
  return {
    users: users
  } 
}

export default connect(mapStateToProps)(LoginPage);
