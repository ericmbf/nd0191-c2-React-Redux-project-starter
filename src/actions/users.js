export const RECEIVE_USERS = "RECEIVE_USERS"
export const ANSWER_FROM_USER = "ANSWER_FROM_USER"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users: users
    };
}

export function answerUserQuestion(info) {
    return {
        type: ANSWER_FROM_USER,
        authedUser: info.authedUser, 
        qid: info.qid,
        answer: info.answer
    };
}