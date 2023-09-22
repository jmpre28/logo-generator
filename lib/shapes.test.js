// Jest test to check class functionality. Tested: PASS
const { Triangle } = require('./shapes')

describe('Shape', () => {
    it('Test for a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        console.log(shape);
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});