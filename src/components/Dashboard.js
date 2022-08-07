import { connect } from "react-redux";
import Tweet from "./Tweet"

const Dashboard = (props) => {

  console.log(props.questions);

  return <div>
    <h3 className="center">New Questions</h3>
    <ul className="dashboard-list">
      {
        props.newQuestions && props.newQuestions.map((id) => {
          return <Tweet key={id} id={id} />
        })
      }
    </ul>
    <h3 className="center">Done</h3>
    {/* <ul className="dashboard-list">
      {
        props.tweetIds.map((id) => {
          return <Tweet key={id} id={id} />
        })
      }
    </ul> */}
  </div>;
};

function mapStateToProps({ questions, authedUser }) {
  return {
    newQuestions: questions ? Object.keys(questions).filter((id) =>
    (!questions[id].optionOne.votes.contains(authedUser) &&
      !questions[id].optionTwo.votes.contains(authedUser))) : null,
    doneQuestions: null
  }
}

export default connect(mapStateToProps)(Dashboard);
