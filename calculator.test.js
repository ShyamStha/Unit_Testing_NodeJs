
const mathOperations = require('./calculator');
//Jest Equality Test
describe(" Equality Calculator tests", function () {
    test('adding 1 + 2 should return 3', function () {
        expect(mathOperations.sum(1, 2)).toBe(3)
    })

    test("subtracting 2 from 10 should return 8", function () {

        expect(mathOperations.sub(10, 2)).toBe(8);
    })

    test("multiplying 2 and 8 should return 16", function () {

        expect(mathOperations.product(2, 8)).toBe(16);
    })
})
//Jest Truthiness Test 
describe("Truthiness Calculator tests", function () {
    test('Truthiness test', function () {
        expect(mathOperations.sum(5, 4)).toBeTruthy()
    })
    test('Falsiness test', function () {
        expect(mathOperations.sub(1 - 1)).toBeFalsy()
    })
    var x = null
    test('Null test', function () {
        expect(x).toBeNull
    })
})
//Number matchers(greaterThan,lessThan,greaterThanOrEqual)
describe("Equality Calculator tests", function () {
    test('sum of 5 Greater than 2', function () {
        expect(mathOperations.sum(3, 2)).toBeGreaterThan(2)
    })
    test('sum of 8 is Lesser than 12', function () {
        expect(mathOperations.sum(4, 4)).toBeLessThan(12)
    })
})
//String Matchers
describe("String Matchers", function () {
    let string = 'I am learning nodejs unit testing'
    test("unit string matcher", function () {
        expect(string).toMatch('unit')
    })
    test("failure string match", function () {
        expect(string).not.toMatch('programming')
    })
})
//Arrays and Iterables
describe("Arrays Matchers", function () {
    const names = [
        'Santosh',
        'Ram',
        'Shyam',
        'Sita',
        'Gita'
    ]
    test('The name has Santosh in it', function () {
        expect(names).toContain('Santosh')
    })
})
// Exceptions matchers
describe("Exception Matchers", function () {
    function compileCode() {
        throw new Error('There is error in your code')
    }
    test('program compiled goes as expected', function () {
        expect(function () {
            compileCode()
        }).toThrow()
    })
})
