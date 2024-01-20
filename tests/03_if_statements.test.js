const ifState = require('../practice/03_if_statements');

// REMOVE THE X FROM 'describe' TO RUN TEST
// TEST 1
xdescribe('canDrink', () => {
    test('returns correct beverage for age', () => {
        expect(ifState.canDrink(20)).toBe('juice');
        expect(ifState.canDrink(15)).toBe('juice');
        expect(ifState.canDrink(21)).toBe('beer');
        expect(ifState.canDrink(25)).toBe('beer');
    })
})

// TEST 2
xdescribe('canVote', () => {
    test('returns correct response for voting age', () => {
        expect(ifState.canVote(17)).toBe("can't vote");
        expect(ifState.canVote(19)).toBe("can vote");
        expect(ifState.canVote(18)).toBe("can vote");
        expect(ifState.canVote(10)).toBe("can't vote");
    })
})

// TEST 3
xdescribe('canDrive', () => {
    test('returns correct driving status', () => {
        expect(ifState.canDrive(12)).toBe('no driving');
        expect(ifState.canDrive(14)).toBe('no driving');
        expect(ifState.canDrive(15)).toBe('learners permit');
        expect(ifState.canDrive(16)).toBe('can drive during day');
        expect(ifState.canDrive(17)).toBe('can drive during day');
        expect(ifState.canDrive(18)).toBe('can drive anytime');
        expect(ifState.canDrive(19)).toBe('can drive anytime');
        expect(ifState.canDrive(45)).toBe('can drive anytime');
    });
});

// TEST 4
xdescribe('week', () => {
    test('returns correct time of the week', () => {
        expect(ifState.week('Monday')).toBe('weekday');
        expect(ifState.week('Tuesday')).toBe('weekday');
        expect(ifState.week('Wednesday')).toBe('weekday');
        expect(ifState.week('Thursday')).toBe('weekday');
        expect(ifState.week('Friday')).toBe('almost weekend');
        expect(ifState.week('Saturday')).toBe('weekend');
        expect(ifState.week('Sunday')).toBe('weekend');
    })
})
