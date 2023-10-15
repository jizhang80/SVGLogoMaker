import inquirer from "inquirer";
import shapeFactory from "./lib/shapeFactory.js";
import questions from "./lib/questions.js";


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