export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION = "SAVE_QUESTION"
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

export function addQuestion(tweet) {
    return {
        type: SAVE_QUESTION,
        tweet: tweet
    };
}