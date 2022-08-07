import { RECEIVE_QUESTIONS } from "../actions/questions"
import { TOGGLE_QUESTION } from "../actions/questions"
import { SAVE_QUESTION } from "../actions/questions"

function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case TOGGLE_QUESTION:
            return {
                // ...state,
                // [action.id]: {
                //     ...state[action.id],
                //     likes: action.hasLiked === true ?
                //         state[action.id].likes.filter((id) => {
                //             return id !== action.authedUser;
                //         })
                //         : state[action.id].likes.concat(action.authedUser)
                // }
            }
        case SAVE_QUESTION:
            // const {tweet} = action;
            // let replyingTo = {}

            // if (tweet.replyingTo !== null) {
            //     let replies = state[tweet.replyingTo].replies;

            //     replyingTo = {
            //       [tweet.replyingTo]: {
            //         ...state[tweet.replyingTo],
            //         replies: replies.concat([tweet.id]),
            //       },
            //     };
            //   }

            // // return {
            // //     ...state,
            // //     [action.tweet.id]: action.tweet,
            // //     ...replyingTo
            // }
        default:
            return state;
    }
}

export default questions;