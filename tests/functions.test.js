const functions = require('../index.js')

test('adds properly', () => {
    expect(functions.countCards(2)).toBe("1 Bet")
    expect(functions.countCards(2)).toBe("2 Bet")
    expect(functions.countCards('J')).toBe("1 Bet")
    expect(functions.countCards('A')).toBe("0 Hold")
    expect(functions.countCards('Q')).toBe("-1 Hold")
    expect(functions.countCards('K')).toBe("-2 Hold")
    expect(functions.countCards(4)).toBe("-1 Hold")
    expect(functions.countCards(5)).toBe("0 Hold")
    expect(functions.countCards(6)).toBe("1 Bet")
})
 