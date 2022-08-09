const _DATA = require("./_DATA")

describe('_saveQuestion', () => {
  it('will return the all that field formated', async () => {
    
    var expectedQuestion = {
        optionOneText: "q1",
        optionTwoText: "q2",
        author: "Author"
      };

    var pastTimestamp = Date.now();

    var result = await _DATA._saveQuestion(expectedQuestion);
    expect(result.id).not.toEqual(0);
    expect(result.pastTimestamp).not.toEqual(result.timestamp);
    expect(result.author).toEqual(expectedQuestion.author);
    expect(result.optionOne.text).toEqual(expectedQuestion.optionOneText);
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionTwo.text).toEqual(expectedQuestion.optionTwoText);
    expect(result.optionTwo.votes).toEqual([]);
  });

  it('will return an error if some info question is missing', async () => {
    var invalidData = {
      optionOneText: "q1",
      author: "Author"
    };
    await expect(_DATA._saveQuestion(invalidData)).rejects
      .toEqual('Please provide optionOneText, optionTwoText, and author');
  });
});

describe('_saveQuestionAnswer', () => {
  it('will return true if all data is correctly!', async () => {
    
    var answerQuestion = {
        authedUser: "mtsamis",
        qid: "xj352vofupe1dqz9emx13r",
        answer: "optionTwo"
      };

    var result = await _DATA._saveQuestionAnswer(answerQuestion);
    expect(result).toEqual(true);
  });

  it('will return an error if some data is missing', async () => {
    var invalidData = {
      authedUser: "mtsamis",
      qid: "xj352vofupe1dqz9emx13r",
    };

    await expect(_DATA._saveQuestionAnswer(invalidData)).rejects
      .toEqual('Please provide authedUser, qid, and answer');
  });
});