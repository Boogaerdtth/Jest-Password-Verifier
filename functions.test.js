const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./functions.js");

// test('' , () => {
//     expect ().toEqual();
// })

// test('Should not be blank', () => {
//     expect(isNotNull('Pass')).toBe(true);
// })

test('Should not be empty', () => {
    expect(isNotNull()).not.toBeNull();
})

test('Should not be longer than 8 characters', () => {
    expect(hasRightLength('JohnDoe3')).toBe(true);
})

test('Should have uppercase', () => {
    expect(hasUpperCaseCharacter('JohnDoe83')).toBe(true);
})

test('Should have lowercase', () => {
    expect(hasLowerCaseCharacter('JohnDoe83')).toBe(true);
})

test('Should have a digit', () => {
    expect(hasDigit('JohnDoe83')).toBe(true);
})

test("has reached minimum conditions", () => {
    expect(minimumConditionsReached([true, false, true, false, true])).toBe(true);
});

test("is password verified", () => {
    expect(verifyPassword('JohnDoe83')).toBe(true);
});