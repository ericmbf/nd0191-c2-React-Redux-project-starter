import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {formatDate } from "../utils/helpers"

const Question = (props) => {

  const navigate = useNavigate();
  
  // const { name, avatar, timestamp, text, hasLiked, likes, replies, id, parent } =
  const {id, author, timestamp} = props.question;

  const toParent = (e, id) => {
    // e.preventDefault();
    // navigate(`/question/${id}`);
  }

  const handleLike = (e) => {
    // e.preventDefault();
    // props.dispatch(handleToggleTweet({
    //   id: props.id,
    //   hasLiked: props.question.hasLiked,
    //   authedUser: props.authedUser
    // }
    // ));
  }

  return <Link to={`/question/${id}`} className="question">
    <div className="question-info">
      <div>
        <span>{author}</span>
        <span>{formatDate(timestamp)}</span>
        <button>Show</button>
      </div>
    </div>
  </Link>
};

function mapStateToProps({ questions }, { id }) {
  const question = questions[id];

  return {
    question: question ? {
      author: question.author,
      timestamp: question.timestamp
     } : null,
  };
}

export default connect(mapStateToProps)(Question);
