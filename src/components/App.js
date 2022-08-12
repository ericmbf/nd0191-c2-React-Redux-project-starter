import { Fragment, useEffect } from "react";
import { handleInitialData, handleUserSession } from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { LoadingBar } from "react-redux-loading-bar"
import LoginPage from "./LoginPage";
import QuestionPage from "./QuestionPage";
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import NewQuestion from "./newQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav"
import PageNotFound from "./PageNotFound";
import useAuth from "./useAuth";

const App = (props) => {

  const { authed, user } = useAuth();
  const location = useLocation();

  function RequireAuth({ children }) {
    return authed === 'true' ? children : 
    <Navigate to="/login" replace state={{path: location.pathname}}/>;
  }

  useEffect(() => {
    props.dispatch(handleInitialData());
    props.dispatch(handleUserSession(user));
  }, []);

  return (<Fragment>
    <LoadingBar />
    <div className="container">
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" exact element={<RequireAuth>
              <Nav />
              <Dashboard />
            </RequireAuth>} />
          <Route path="/questions/:id"
              exact element={<RequireAuth>
              <Nav />
              <QuestionPage />
            </RequireAuth>} />
          <Route path="/add"
            element={<RequireAuth>
              <Nav />
              <NewQuestion />
            </RequireAuth>} />
          <Route path="/leaderboard"
            element={<RequireAuth>
              <Nav />
              <Leaderboard />
            </RequireAuth>} />
          <Route path="*" 
          element={
            <Navigate to="/PageNotFound" replace state={{path: location.pathname}}/>
          } />
          <Route path="/PageNotFound" 
          element={
            <RequireAuth>
              <PageNotFound/>
            </RequireAuth>
          } />
      </Routes>
    </div>
  </Fragment>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    loading: users !== {} && questions !== {},
  }
}

export default connect(mapStateToProps)(App);
