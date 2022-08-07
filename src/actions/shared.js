import { getInitialData } from "../utils/api"
import { receiveQuestions } from "./questions"
import { receiveUsers } from "./users"
import { showLoading, hideLoading} from "react-redux-loading-bar"
import { setAuthedUser } from "./authedUser"

// TODO: Remove, only development propuse
const AUTHED_ID = "sarahedo"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());


            // TODO: Remove, only development propuse
            dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}