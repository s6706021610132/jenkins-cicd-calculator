const { add } = require('./public/calculator');

console.log('Running tests...');

if (add(2, 3) !== 5) {
    throw new Error('Test Failed: 2 + 3 should equal 5');
}

if (add(10, 5) !== 15) {
    throw new Error('Test Failed: 10 + 5 should equal 15');
}

if (add(0, 10) !== 10) {
    throw new Error('Test Failed: 0 + 10 should equal 10');
}

console.log('All tests passed!');