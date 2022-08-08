import { Fragment, useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar"
import LoginPage from "./LoginPage";
import QuestionPage from "./QuestionPage";
import { Route, Routes, Navigate } from "react-router-dom";
import NewQuestion from "./newQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav"

const App = (props) => {

  function RequireAuth({ children }) {
    return props.loggedIn === true ? children : <Navigate to="/login" replace />;
  }

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (<Fragment>
    <LoadingBar />
    <div className="container">
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/"
          element={<RequireAuth>
            <Nav/>
            <Dashboard />
          </RequireAuth>} />
        <Route path="/question/:id"
          element={<RequireAuth>
            <Nav/>
            <QuestionPage />
          </RequireAuth>} />
        <Route path="/new" exact
          element={<RequireAuth>
            <Nav/>
            <NewQuestion />
          </RequireAuth>} />
        <Route path="/leaderboard" exact
          element={<RequireAuth>
            <Nav/>
            <Leaderboard />
          </RequireAuth>} />
      </Routes>
    </div>
  </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    loading: users !== {} && questions !== {},
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
