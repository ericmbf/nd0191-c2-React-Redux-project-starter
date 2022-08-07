// import { connect } from "react-redux";
// import { formatTweet, formatDate } from "../utils/helpers"
// import {
//   TiArrowBackOutline,
//   TiHeartOutline,
//   TiHeartFullOutline,
// } from "react-icons/ti";
// import { handleToggleTweet } from "../actions/questions";
// import { Link, useNavigate } from "react-router-dom";

// const Tweet = (props) => {

//   const navigate = useNavigate();
  
//   const { name, avatar, timestamp, text, hasLiked, likes, replies, id, parent } =
//     props.tweet;

//   const toParent = (e, id) => {
//     e.preventDefault();
//     navigate(`/tweet/${id}`);
//   }

//   const handleLike = (e) => {
//     e.preventDefault();
//     props.dispatch(handleToggleTweet({
//       id: props.id,
//       hasLiked: props.tweet.hasLiked,
//       authedUser: props.authedUser
//     }
//     ));
//   }

//   return <Link to={`/tweet/${id}`} className="tweet">
//     <img className="avatar" alt={`Avatar of ${name}`} src={avatar} />
//     <div className="tweet-info">
//       <div>
//         <span>{name}</span>
//         <div>{formatDate(timestamp)}</div>
//         {
//           parent && (
//             <button className="replying-to"
//               onClick={(e) => toParent(e, parent.id)}>
//               Replying to @{parent.author}
//             </button>)
//         }
//         <p>{text}</p>
//       </div>
//       <div className="tweet-icons">
//         <TiArrowBackOutline className="tweet-icon" />
//         <span>{replies !== 0 && replies}</span>
//         <button className="heart-button" onClick={handleLike}>
//           {hasLiked === true ? (
//             <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
//           ) : (
//             <TiHeartOutline className="tweet-icon" />
//           )}
//         </button>
//         <span>{likes !== 0 && likes}</span>
//       </div>
//     </div>
//   </Link>
// };

// function mapStateToProps({ users, tweets, authedUser }, { id }) {
//   const tweet = tweets[id];
//   const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

//   return {
//     authedUser,
//     tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser,
//       parentTweet)
//       : null,
//   };
// }

// export default connect(mapStateToProps)(Tweet);
