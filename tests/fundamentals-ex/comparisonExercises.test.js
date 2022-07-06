import {isJane, compareNumbers, isGreaterThan10} from "../../src/fundamentals-ex/comparisonExercises.js";
describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        const name = 'Jane';
        let result = isJane(name)
        expect(result).toEqual('Jane');
    });

    test('using === should return 10', () => {
        /* Completa el test y completa la function compareNumbers */
        let number1 = '10';
        let number2 = '10';
        let result =  compareNumbers(number1, number2)
        expect(result).toEqual(10);
    });

    test('using === number not equal and return no son igual', () => {
        /* Completa el test y completa la function compareNumbers */
        let number1 = '5';
        let number2 = '10';
        let result =  compareNumbers(number1, number2)
        expect(result).toEqual("no son iguales");
    });

    test('quantity are greater than 10', () => {
        /* Completa el test y completa la function isGreaterThan10 */
        const quantity = 15;
       let result = isGreaterThan10(quantity, 10)

        expect(result).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    test.skip('should be greater than 10 and equal to 20', () => {
        /* Completa el test y completa la function isGreaterThan10AndEqualTo20 */
        const numb = 20;
        
        expect(result).toBeGreaterThan();
        expect(result).toEqual(20);
    });
});