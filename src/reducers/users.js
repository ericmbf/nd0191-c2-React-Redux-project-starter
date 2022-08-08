import { RECEIVE_USERS,NEW_QUESTION_BY_USER,  ANSWER_FROM_USER } from "../actions/users"

function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...action.users,
            }

        case ANSWER_FROM_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer 
                    }
                }
            }

        case NEW_QUESTION_BY_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat(
                        [action.question.id]) 
                }
            }
        default:
            return state;
    }
}

export default users;