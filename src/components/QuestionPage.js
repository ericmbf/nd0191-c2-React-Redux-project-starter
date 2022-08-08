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

    const { author, avatar, optionOne, optionTwo } = props;
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

    return <div className="center">
        <h2>Would You Rather</h2>
        <h3>Poll by {author}</h3>
        <img className="big-avatar" src={avatar} />
        <br></br>
        <div className="question-response">
            <div className="question-option">
                <span>{optionOne}</span>
                <button id={ANSWER_ONE} onClick={(e) => handleAnswer(e)}>Click</button>
            </div>
            <div className="question-option">
                <span>{optionTwo}</span>
                <button id={ANSWER_TWO} onClick={(e) => handleAnswer(e)}>Click</button>
            </div>
        </div>
    </div>;
};

function mapStateToProps({ questions, users }, props) {
    const { id } = props.router.params;
    const question = questions !== {} ? questions[id] : null;
    const avatar = question ? users[question.author].avatarURL : null;

    return {
        author: question ? questions[id].author : null,
        avatar: question ? avatar : null,
        optionOne: question ? questions[id].optionOne.text : null,
        optionTwo: question ? questions[id].optionTwo.text : null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
