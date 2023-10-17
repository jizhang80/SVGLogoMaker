const inquirer = require('inquirer');
const shapeFactory = require("./lib/shapeFactory.js");
const questions = require("./lib/questions.js");

inquirer
.prompt(questions)
.then((answer)=>{
    // create shape
    const shape = shapeFactory(
        answer.shape, 
        answer.shapeColor, 
        answer.text, 
        answer.textColor
    );
    // save shape svg file
    shape.draw();
})