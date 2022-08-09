import * as React from 'react';
import { render } from '@testing-library/react';
import QuestionCard from './QuestionCard';
import {BrowserRouter as Router} from 'react-router-dom';

var question = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'Build our new application with Javascript',
        },
        optionTwo: {
            votes: [],
            text: 'Build our new application with Typescript'
        }
    }
}

describe('QuestionCard', () => {
    it('matches the snapshot when id is null', () => {
        
        var component = render(
            <Router>
                <QuestionCard question={question} />
            </Router>
        );
        expect(component).toMatchSnapshot();
    });
    
    it('matches the snapshot when the id', () => {
        var component = render(
            <Router>
                <QuestionCard question={question} id={"8xf0y6ziyjabvozdd253nd"} />
            </Router>
        );
        expect(component).toMatchSnapshot();
    });
});