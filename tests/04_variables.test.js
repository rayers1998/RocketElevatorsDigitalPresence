const vars = require('../practice/04_variables')

// TEST 1
xdescribe('number', () => {
    test('returns correct number', () => {
        expect(vars.number).toBe(10);
    })
})

// Test 2
xdescribe('getName', () => {
    test('returns correct name', () => {
        expect(vars.getName()).toBe('Bill');
    })
})

xdescribe('newNumber', () => {
    test('returns correct value of new number', () => {
        expect(vars.newNumber).toBe(20);
    })
})

