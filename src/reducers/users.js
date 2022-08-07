import { RECEIVE_USERS, ANSWER_FROM_USER } from "../actions/users"

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
        default:
            return state;
    }
}

export default users;