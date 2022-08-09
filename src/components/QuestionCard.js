import { Link, useNavigate } from "react-router-dom";
import {formatDate } from "../utils/helpers"

const QuestionCard = (props) => {

  const navigate = useNavigate();
  const id = props.id;
  const question = props.question;
  const { author, timestamp} = question;

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

export default QuestionCard;
