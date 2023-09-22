// Constructor class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text.toUpperCase();
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

};

// Child classes, all extend from Shape class.
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        const generatedShape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        return generatedShape;
    }
};

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        const generatedShape = `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`;
        return generatedShape;
    }
};

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        const generatedShape = `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
        return generatedShape;   
    }
};


module.exports = { Circle, Triangle, Square };
