import { showLoading, hideLoading} from "react-redux-loading-bar"
import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export const ANSWER_ONE = "optionOne";
export const ANSWER_TWO = "optionTwo";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    };
}

export function answerQuestion(info) {
    return {
        type: ANSWER_QUESTION,
        authedUser: info.authedUser, 
        qid: info.qid,
        answer: info.answer
    };
}

export function addQuestion(info) {
    return {
        type: ADD_QUESTION,
        question: info
    };
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }).
        then((question) => {
                dispatch(addQuestion(question));
                dispatch(hideLoading());
            })
            .catch((e) => {
                console.warn("Error in Add a new tweet: ", e);
                alert("There was an error in add a new tweet. Try again.");
            });
    };
}