import { Fragment, useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar"
import NewTweet from "./NewTweet";
import LoginPage from "./LoginPage";
import TweetPage from "./TweetPage";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";

const App = (props) => {

  const LoginComponent = (() => {
    return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
    </Routes>
  )});

  const AppComponent = (() => {
    return (
      <div>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          {/* <Route path="/tweet/:id" exact element={<TweetPage/>}/> */}
          {/* <Route path="/new" exact element={<NewTweet/>}/> */}
        </Routes>
      </div>
  )});

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (<Fragment>
          <LoadingBar/>
          <div className="container">
            {
              props.loading === true ? null : 
              props.loggedIn === true ? <AppComponent/> : <AppComponent/>
            }
          </div>
  </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    loading: users === {},
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
