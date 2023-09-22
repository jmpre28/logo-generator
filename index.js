const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Now choose a color for the text of your logo.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo.',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Now select a color for the shape of your logo.'
    }
];

function renderLogo(data) {
    let shape = undefined;
    if(data.shape === 'Triangle') {
        const shape = new Triangle(data.text, data.textColor, data.shapeColor);
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text fill="${shape.textColor}" font-size="60px" x="90" y="170">${shape.text.toUpperCase()}</text>
                </svg>`;
    } else if (data.shape === 'Square') {
        const shape = new Square(data.text, data.textColor, data.shapeColor);
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text fill="${shape.textColor}" font-size="60px" x="91.8" y="116.8">${shape.text.toUpperCase()}</text>
                </svg>`;
    } else if (data.shape === 'Circle') {
        const shape = new Circle(data.text, data.textColor, data.shapeColor);
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                <text fill="${shape.textColor}" font-size="60px" x="91.8" y="116.8">${shape.text.toUpperCase()}</text>
                </svg>`;     
    }
};

function writeToFile(fileName, data) {
    var logo = renderLogo(data)
    fs.writeFile(fileName, logo, (err) => {
        err ? console.error(error) : console.log('Logo generated!')
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = 'logo.svg';
            writeToFile(fileName, data);
        });
};

init();