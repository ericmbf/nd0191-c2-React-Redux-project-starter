import { RECEIVE_QUESTIONS } from "../actions/questions"
import { ADD_QUESTION } from "../actions/questions"
import { ANSWER_QUESTION } from "../actions/questions"

function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes
                        .concat([action.authedUser])
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state;
    }
}

export default questions;