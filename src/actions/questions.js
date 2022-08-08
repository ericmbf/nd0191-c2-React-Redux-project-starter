import { showLoading, hideLoading} from "react-redux-loading-bar"

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