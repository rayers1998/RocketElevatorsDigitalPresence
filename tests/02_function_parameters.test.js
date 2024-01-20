const params = require('../practice/02_function_parameters')

// REMOVE THE X FROM 'describe' TO RUN TEST
// TEST 1
xdescribe('double', () => {
    test('returns the number doubled', () => {
        expect(params.double(5)).toBe(10);
        expect(params.double(7)).toBe(14);
        expect(params.double(3)).toBe(6);
    })
})

// TEST 2
xdescribe('multiply', () => {
    test('multiples the two numbers', () => {
        expect(params.multiply(3, 7)).toBe(21);
        expect(params.multiply(9, 5)).toBe(45);
        expect(params.multiply(20, 4)).toBe(80);
    })
})

// TEST 3
xdescribe('shout', () => {
    test('capitalizes the entire string', () => {
        expect(params.shout('hello')).toBe('HELLO');
        expect(params.shout('world')).toBe('WORLD');
    })
})

// TEST 4
xdescribe('first', () => {
    test('returns the first element from the array', () => {
        expect(params.first([5, 9, 8])).toBe(5);
        expect(params.first(['Bill', 'Doug','Fred','Micheal'])).toBe('Bill');
    })
})