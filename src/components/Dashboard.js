import { connect } from "react-redux";
import QuestionCard from "./QuestionCard"

function isNewQuestion(array, isValid) {
  return array.reduce(([pass, fail], elem) => {
    return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
  }, [[], []]);
}

const Dashboard = (props) => {
  const questions = props.questions;

  return <div>
    <h3 className="center">New Questions</h3>
    <ul className="dashboard-list">
      {
        props.newQuestionsId && props.newQuestionsId.map((id) => {
          return <QuestionCard key={id} id={id} question={questions[id]} />
        })
      }
    </ul>
    <h3 className="center">Done</h3>
    <ul className="dashboard-list">
      {
          props.doneQuestionsId && props.doneQuestionsId.map((id) => {
          return <QuestionCard key={id} id={id} question={questions[id]} />
        })
      }
    </ul>
  </div>;
};

function mapStateToProps({ questions, authedUser }) {
  
  const orderedQuestions = Object.fromEntries(
    Object.entries(questions).sort(([,a],[,b]) => b.timestamp -a.timestamp));

  const [newQuestionsId, doneQuestionsId] = isNewQuestion(Object.keys(orderedQuestions),
    (id) => !questions[id].optionOne.votes.includes(authedUser) &&
    !questions[id].optionTwo.votes.includes(authedUser));
  
  
  return {
    newQuestionsId: questions ? newQuestionsId : null,
    doneQuestionsId: questions ? doneQuestionsId: null,
    questions: questions
  }
}

export default connect(mapStateToProps)(Dashboard);
