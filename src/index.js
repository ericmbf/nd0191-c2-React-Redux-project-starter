import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers"
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";
import { AuthProvider } from "./components/useAuth";

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
