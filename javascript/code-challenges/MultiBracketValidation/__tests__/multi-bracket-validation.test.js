'use strict';

const multiBracketValidation = require('../multi-bracket-validation')

describe('Multi bracket validation', () => {
    it('Can successfully validate a string with only brackets', () => {
         expect(multiBracketValidation('[[]]{}')).toBeTruthy();
    })

    it('Can successfully validate a string with brackets and other characters', () => {
        expect(multiBracketValidation('[hello]((hi))')).toBeTruthy();
    })

    it('Will successfully return false if the brackets are not validate', () => {
        expect(multiBracketValidation('(((][]])')).toBeFalsy();
    })

    it('Can successfully validate a sentence string with brackets', () => {
        expect(multiBracketValidation('I am so happy (so happy)! [Did you know?]')).toBeTruthy();
    })
})