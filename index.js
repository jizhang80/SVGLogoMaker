import inquirer from "inquirer";
import pkg from 'validate-color';
const {validateHTMLColorHex, validateHTMLColorName} = pkg;

const questions = [
    {
        // input text up to 3 char
        type: 'input',
        name: 'text',
        message: 'What text whould you like to have in the SVG(up to 3 char): ',
        validate(value) {
            if (value.length > 3 || !value) {
                return 'Please enter up to 3 characters.';
            }
            return true;
        },
    },
    {
        // ask for text color
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color keyword here(e.g. red/RED/#ff0000): ',
        validate(colorStr) {
            if (validateHTMLColorHex(colorStr)||validateHTMLColorName(colorStr)) {
                return true;
            };
            return 'Please enter named color(such as red/blue) or a hexadecimal color number'
        },
    },
    {
        //ask for shape
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape: ',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        // ask for shape color
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color keyword here(e.g. red/RED/#ff0000): ',
        validate(colorStr) {
            if (validateHTMLColorHex(colorStr)||validateHTMLColorName(colorStr)) {
                return true;
            };
            return 'Please enter named color(such as red/blue) or a hexadecimal color number'
        },
    },
]

inquirer
.prompt(questions)
.then((answer)=>{
    console.log(answer);
})