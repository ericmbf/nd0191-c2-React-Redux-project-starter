import { getInitialData } from "../utils/api"
import { addQuestion, receiveQuestions } from "./questions"
import { receiveUsers } from "./users"
import { showLoading, hideLoading} from "react-redux-loading-bar"
import { setAuthedUser } from "./authedUser"
import { answerQuestion } from "./questions"
import { answerUserQuestion } from "./users"
import { saveQuestionAnswer } from "../utils/api"

// TODO: Remove, only development propuse
const AUTHED_ID = "sarahedo"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            
            // TODO: Remove, only development propuse
            dispatch(setAuthedUser(AUTHED_ID));
            
            dispatch(hideLoading());
        })
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        info.authedUser = authedUser;

        saveQuestionAnswer(info).
        then(() => {
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
