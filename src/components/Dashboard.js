import { connect } from "react-redux";
import Question from "./Question"

function isNewQuestion(array, isValid) {
  return array.reduce(([pass, fail], elem) => {
    return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
  }, [[], []]);
}

const Dashboard = (props) => {
  return <div>
    <h3 className="center">New Questions</h3>
    <ul className="dashboard-list">
      {
        props.newQuestionsId && props.newQuestionsId.map((id) => {
          return <Question key={id} id={id} />
        })
      }
    </ul>
    <h3 className="center">Done</h3>
    <ul className="dashboard-list">
      {
          props.doneQuestionsId && props.doneQuestionsId.map((id) => {
          return <Question key={id} id={id} />
        })
      }
    </ul>
  </div>;
};

function mapStateToProps({ questions, authedUser }) {
  
  const [newQuestionsId, doneQuestionsId] = isNewQuestion(Object.keys(questions),
    (id) => !questions[id].optionOne.votes.includes(authedUser) &&
    !questions[id].optionTwo.votes.includes(authedUser));
  
  return {
    newQuestionsId: questions ? newQuestionsId : null,
    doneQuestionsId: questions ? doneQuestionsId: null
  }
}

export default connect(mapStateToProps)(Dashboard);
