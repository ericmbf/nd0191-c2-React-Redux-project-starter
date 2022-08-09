import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionCard from './QuestionCard';
import {BrowserRouter as Router} from 'react-router-dom';
import NewQuestion from './newQuestion';

describe('NewQuestion', () => {
    it('will display an error if the answers input is not provided.', () => {
        
        var component = render(
            <Router>
                <NewQuestion />
            </Router>
        );

        var submitButton = component.getByTestId('submit-button');
        fireEvent.click(submitButton);
        expect(component.getByTestId('error-header')).toBeInTheDocument();
    });
});