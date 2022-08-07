import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ANSWER_ONE, ANSWER_TWO } from "../actions/questions";
import { handleAddQuestion } from "../actions/questions";
import { useState } from "react";

const QuestionPage = ({ dispatch, id }) => {

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestion(optionOne, optionTwo));

        if (!id) {
            navigate("/");
        }
    }

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.id === ANSWER_ONE) {
            setOptionOne(e.target.value);
        }
        else {
            setOptionTwo(e.target.value);
        }
    }

    return <div className="center">
        <h3>Would You Rather</h3>
        <h4>Create Your Own Poll</h4>
        <form className="new-question" onSubmit={handleSubmit}>
            <label>First Option</label>
            <input id={ANSWER_ONE} type={optionOne} className="input-answer"
                placeholder="Option One"
                onChange={handleChange} />
            <label>Second Option</label>
            <input id={ANSWER_TWO} type={optionTwo} className="input-answer"
                placeholder="Option Two"
                onChange={handleChange} />
            <button className="btn" type="submit"
                disabled={optionOne === "" || optionTwo === ""}>
                Submit
            </button>
        </form>
    </div>;
};

export default connect()(QuestionPage);
