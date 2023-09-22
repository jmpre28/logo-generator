// Jest test to check class functionality. Tested: PASS
const { Triangle, Square, Circle } = require('./shapes')

describe('Shape', () => {
    it('Test for a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        console.log(shape);
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

describe('Shape', () => {
    it('Test for a red Square', () => {
        const shape = new Square();
        shape.setColor("red");
        console.log(shape);
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="red" />');
    })
});

describe('Shape', () => {
    it('Test for a green circle', () => {
        const shape = new Circle();
        shape.setColor("green");
        console.log(shape);
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="green" />');
    })
});