const questions = require("./questions")

describe('questionsAction', () => {
    it('will return correct type RECEIVE_QUESTIONS', () => {
        var results = questions.receiveQuestions({});
        expect(results.type).toEqual("RECEIVE_QUESTIONS");
    });

    it('will return correct type ANSWER_QUESTION', () => {
        var results = questions.answerQuestion({});
        expect(results.type).toEqual("ANSWER_QUESTION");
    });
    
    it('will return correct type ADD_QUESTION', () => {
        var results = questions.addQuestion({});
        expect(results.type).toEqual("ADD_QUESTION");
    });
});