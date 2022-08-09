import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionCard from './QuestionCard';
import { BrowserRouter as Router } from 'react-router-dom';
import NewQuestion from './newQuestion';
import reducer from "../reducers"
import middleware from "../middleware"
import { createStore } from "redux";
import { Provider } from "react-redux";

describe('NewQuestion', () => {
    it('will display an error if the answers input is not provided.', () => {
        const store = createStore(reducer, middleware);

        var component = render(
            <Provider store={store}>
                <Router>
                    <NewQuestion />
                </Router>
            </Provider>
        );

        var submitButton = component.getByTestId('submit-button');
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-header')).toBeInTheDocument();
    });
});