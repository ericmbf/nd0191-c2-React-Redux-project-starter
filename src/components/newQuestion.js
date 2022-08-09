import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ANSWER_ONE, ANSWER_TWO } from "../actions/questions";
import { handleAddQuestion } from "../actions/shared";
import { useState } from "react";

const NewQuestion = ({ dispatch, id }) => {

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (optionOne === "" || optionTwo === "") {
            setError(true);
        }
        else {
            setError(false);

            if (!id) {
                dispatch(handleAddQuestion(optionOne, optionTwo));
                navigate("/");
            }
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

    return (
        <div className="center">
            <h3>Would You Rather</h3>
            <h4>Create Your Own Poll</h4>
            {error &&
                <h1 data-testid="error-header">Error: Please ensure all fields are filled out.</h1>
            }
            <form className="new-question" onSubmit={handleSubmit}>
                <label>First Option</label>
                <input data-testid='fist-answer' id={ANSWER_ONE} type={optionOne} className="input-answer"
                    placeholder="Option One" value={optionOne}
                    onChange={handleChange} />
                <label>Second Option</label>
                <input data-testid='second-answer' id={ANSWER_TWO} type={optionTwo} className="input-answer"
                    placeholder="Option Two" value={optionTwo}
                    onChange={handleChange} />
                <button data-testid='submit-button' className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
};

export default connect()(NewQuestion);
