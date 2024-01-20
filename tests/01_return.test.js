const practice = require('../practice/01_return')


// REMOVE THE X FROM 'describe' TO RUN TEST
// TEST 1
xdescribe('hello', () => {
    test('returns "Hello World" string', () => {
        expect(practice.hello()).toBe('Hello World');
    })
})

// TEST 2
xdescribe('sum', () => {
    test('returns sum of a and b', () => {
        expect(practice.sum(2, 3)).toBe(5);
        expect(practice.sum(7, 9)).toBe(16);
    })
})

// TEST 3
xdescribe('helloPerson', () => {
    test('returns "Hello" + name', () => {
        expect(practice.helloPerson("Bill")).toBe('Hello Bill');
        expect(practice.helloPerson("Dave")).toBe('Hello Dave');
    })
})

// TEST 4
xdescribe('minus', () => {
    test('returns a minus b', () => {
        expect(practice.minus(2, 3)).toBe(-1);
        expect(practice.minus(7, 1)).toBe(6);
    })
})

// TEST 5
xdescribe('divide', () => {
    test('returns a divded by b', () => {
        expect(practice.divide(15, 3)).toBe(5);
        expect(practice.divide(18, 9)).toBe(2);
    })
})