import { Fragment, useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar"
import LoginPage from "./LoginPage";
import QuestionPage from "./QuestionPage";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import NewQuestion from "./newQuestion";
import Leaderboard from "./Leaderboard";

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
          <Route path="/question/:id" exact element={<QuestionPage/>}/>
          <Route path="/new" exact element={<NewQuestion/>}/>
          <Route path="/leaderboard" exact element={<Leaderboard/>}/>
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
              props.loggedIn === true ? <AppComponent/> : <LoginPage/>
            }
          </div>
  </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    loading: authedUser === null,
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
