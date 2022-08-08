const users = require("./users")

describe('usersAction', () => {
    it('will return correct type ANSWER_FROM_USER', () => {
        var results = users.answerUserQuestion({});
        expect(results.type).toEqual("ANSWER_FROM_USER");
    });

    it('will return correct type NEW_QUESTION_BY_USER', () => {
        var results = users.addQuestionToUser({});
        expect(results.type).toEqual("NEW_QUESTION_BY_USER");
    });
});