const pow = require('./index.js');

describe('pow function', () => {

    test('should throw error for invalid degree', () => {
        expect(() => pow(5, -1)).toThrow("Degree must be a non-negative integer");
        expect(() => pow(5, 1.5)).toThrow("Degree must be a non-negative integer");
    });

    test('should throw error for invalid num', () => {
        expect(() => pow("invalid", 2)).toThrow("Num must be a valid number!");
    });

    test('should calculate correctly for positive degree', () => {
        expect(pow(5, 4)).toBe(625);
    });

    test('should return 1 for degree 0', () => {
        expect(pow(5, 0)).toBe(1);
    });

    test('should calculate correctly for negative base', () => {
        expect(pow(-5, 3)).toBe(-125);
    });

    test('should throw error for non-integer degree', () => {
        expect(() => pow(5, 2.5)).toThrow("Degree must be a non-negative integer");
    });

});