// import { useState } from "react";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { handleAddTweet } from "../actions/questions";

// const NewTweet = ({dispatch, id}) => {

//   const [text, setText] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(handleAddTweet(text, id)); 
//     setText("");

//     if(!id){
//       navigate("/");
//     }
//   }
  
//   const handleChange = (e) => {
//     e.preventDefault();
//     setText(e.target.value);
//   }

//   const tweetLeft = 280 - text.length;

//   return <div>
//             <h3 className="center">Compose new Tweet</h3>
//             <form className="new-tweet" onSubmit={handleSubmit}>
//               <textarea className="textarea"
//                 placeholder="What is happening?"
//                 value={text}
//                 onChange={handleChange}
//                 maxLength={280}
//               />
//               {tweetLeft <= 100 && 
//                 (<div className="tweet-length">{tweetLeft}</div>)}
//               <button className="btn" type="submit" disabled={text === ""}>
//                 Submit
//               </button>
//             </form>
//          </div>;
// };

// export default connect()(NewTweet);
