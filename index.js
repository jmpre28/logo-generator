const fs = require('fs');
const inquirer = require('inquirer');
const shape = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Now choose a color for the text of your logo'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Now select a color for the shape of your logo.'
    }
];


function renderLogo(data) {
    let shape = None;
    if(data.shape === 'Triangle') {
        const shape = new Triangle(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === 'Square') {
        const shape = new Square(data.text, data.textColor, data.shapeColor);
    } else if (data.shape === 'Circle') {
        const shape = new Circle(data.text, data.textColor, data.shapeColor);
    }
    return shape.render();
};

function init() {
    inquirer
        .createPromptModule(questions)
        .then((data) => {
            const fileName = 'logo.svg';
            fs.writeFile(fileName, data);
        });
};

init();