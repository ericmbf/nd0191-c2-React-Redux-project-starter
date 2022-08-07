import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {formatDate } from "../utils/helpers"

const QuestionCard = (props) => {

  const navigate = useNavigate();
  
  const { author, timestamp} = props.question;
  const id = props.id;

  const toParent = (e, id) => {
    e.preventDefault();
    navigate(`/question/${id}`);
  }

  return <Link to={`/question/${id}`} className="question">
    <div className="question-info">
      <div>
        <span>{author}</span>
        <span>{formatDate(timestamp)}</span>
        <button onClick={(e) => toParent(e, id)}>Show</button>
      </div>
    </div>
  </Link>
};

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];

  return {
    question: question ? {
      author: question.author,
      timestamp: question.timestamp,
    } : null,
  };
}

export default connect(mapStateToProps)(QuestionCard);
