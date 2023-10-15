import inquirer from "inquirer";
import shapeFactory from "./lib/shapeFactory.js";
import questions from "./lib/questions.js";


inquirer
.prompt(questions)
.then((answer)=>{
    console.log(answer);
    // create shape
    const shape = shapeFactory(answer.shape);
    // fill shape params
    shape.shape = answer.shape;
    shape.text = answer.text;
    shape.textColor = answer.textColor;
    shape.color = answer.shapeColor;
    // save shape svg file
    shape.draw();
})