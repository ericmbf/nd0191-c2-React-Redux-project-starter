import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ANSWER_ONE, ANSWER_TWO } from "../actions/questions";
import { handleAnswerQuestion } from "../actions/shared";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const QuestionPage = (props) => {

    const { author, avatar, optionOne, optionTwo, done, votes1, percent1, 
        votes2, percent2 } = props;
    const { id } = props.router.params;
    const navigate = useNavigate();
    
    const handleAnswer = (e) => {
        e.preventDefault();
        props.dispatch(handleAnswerQuestion({
            qid: id,
            answer: e.target.id,
        }));
        navigate("/");
    }

    const VoteAndPercent = ((props) => {
        return (
            <div className="vote-percent">
                <span>Votes:{props.votes}</span>
                <span>
                    {props.percent*100}%
                </span>
            </div>
        )
    })

    return <div className="center">
        <h3>Poll by {author}</h3>
        <img className="big-avatar" src={avatar} />
        <h2>Would You Rather</h2>
        <div className="question-response">
            <div className="question-option">
                <span>{optionOne}</span>
                <button id={ANSWER_ONE} onClick={(e) => handleAnswer(e)}>Click</button>
                {
                    done && (<VoteAndPercent votes={votes1} percent={percent1}/>) 
                }
            </div>
            <div className="question-option">
                <span>{optionTwo}</span>
                <button id={ANSWER_TWO} onClick={(e) => handleAnswer(e)}>Click</button>
                {
                    done && (<VoteAndPercent votes={votes2} percent={percent2}/>) 
                }
            </div>
        </div>
    </div>;
};

function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props.router.params;
    const question = questions !== {} ? questions[id] : null;
    const avatar = question ? users[question.author].avatarURL : null;
    return {
        author: question ? questions[id].author : null,
        avatar: question ? avatar : null,
        optionOne: question ? questions[id].optionOne.text : null,
        optionTwo: question ? questions[id].optionTwo.text : null,
        done: questions[id].optionOne.votes.includes(authedUser) ||
            questions[id].optionTwo.votes.includes(authedUser),
        votes1: questions[id].optionOne.votes.length,
        percent1: questions[id].optionOne.votes.length /
            (questions[id].optionOne.votes.length + 
            questions[id].optionTwo.votes.length),
        votes2: questions[id].optionTwo.votes.length,
        percent2: questions[id].optionTwo.votes.length /
            (questions[id].optionOne.votes.length + 
            questions[id].optionTwo.votes.length),
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
