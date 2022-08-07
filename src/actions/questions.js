import { hideLoading, showLoading } from "react-redux-loading-bar"
import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const TOGGLE_QUESTION = "TOGGLE_QUESTION"
export const SAVE_QUESTION = "SAVE_QUESTION"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    };
}

export function toggleQuestion(info) {
    return {
        type: TOGGLE_QUESTION,
        id: info.id, 
        hasLiked: info.hasLiked,
        authedUser: info.authedUser
    };
}

export function addQuestion(tweet) {
    return {
        type: SAVE_QUESTION,
        tweet: tweet
    };
}

export function handleToggleQuestion(info) {
    // return (dispatch) => {
    //     saveLikeToggle(info)
    //         .then(() => {
    //             dispatch(toggleQuestion(info));
    //         })
    //         .catch((e) => {
    //             console.warn("Error in handleToggleQuestion: ", e);
    //             alert("There was an error liking the tweet. Try again.");
    //         });
    // };
}

export function handleAddQuestion(text, replyingTo) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        saveQuestion({
            text,
            author: authedUser,
            replyingTo
        })
            .then((tweet) => {
                dispatch(addQuestion(tweet));
                dispatch(hideLoading());
            })
            .catch((e) => {
                console.warn("Error in Add a new tweet: ", e);
                alert("There was an error in add a new tweet. Try again.");
            });
    };
}
