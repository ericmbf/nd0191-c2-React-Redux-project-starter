const setAuthedUser = require("./authedUser")

describe('authedUserAction', () => {
    it('will return correct ID', () => {
        var expectedId = 10;
        var results = setAuthedUser(expectedId);
        expect(results.id).toEqual(expectedId);
    });

    it('will return correct TYPE Action', () => {
        var results = setAuthedUser(10);
        expect(results.type).toEqual("SET_AUTHED_USER");
    });
});