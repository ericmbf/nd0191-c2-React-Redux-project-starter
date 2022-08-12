import { getInitialData } from "../utils/api"
import { addQuestion, receiveQuestions } from "./questions"
import { receiveUsers } from "./users"
import { showLoading, hideLoading} from "react-redux-loading-bar"
import { answerQuestion } from "./questions"
import { answerUserQuestion } from "./users"
import { saveQuestionAnswer } from "../utils/api"
import { saveQuestion } from "../utils/api"
import { addQuestionToUser } from "./users"
import { setAuthedUser } from "./authedUser"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        })
    }
}

export function handleUserSession(user) {
    return (dispatch) => {
        dispatch(setAuthedUser(user));
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        info.authedUser = authedUser;

        saveQuestionAnswer(info)
        .then(() => {
                dispatch(answerQuestion(info));
                dispatch(answerUserQuestion(info));
                dispatch(hideLoading());
            })
            .catch((e) => {
                console.warn("Error in Save the answer: ", e);
                alert("There was an error in save the answer. Try again.");
            });
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
        })
        .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionToUser({
                    question,
                    authedUser
                }));
                dispatch(hideLoading());
            })
            .catch((e) => {
                console.warn("Error in Add a new tweet: ", e);
                alert("There was an error in add a new tweet. Try again.");
            });
    };
}