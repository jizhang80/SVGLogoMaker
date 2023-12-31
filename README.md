# SVG Logo Maker

## walkthrough video link
[https://drive.google.com/file/d/1-uJKRQS5hjKJNLQaM0xBrSqHsrgoFTXE/view](https://drive.google.com/file/d/1-uJKRQS5hjKJNLQaM0xBrSqHsrgoFTXE/view)

## sample svg file
1. [logo.svg](./examples/logo.svg)
2. [Circle-ss.svg](./examples/Circle-ss.svg)
3. [Square-SVG.svg](./examples/Square-SVG.svg)
4. [Triangle-ss.svg](./examples/Triangle-ss.svg)

## Task

The task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## function description
1. exec `node index.js` to start.
2. application import "inquirer" for questions.
3. application import "validate-color" for color (named or Hex) input validation.

## directory structure
 start with a directory structure that looks like the following example:

```md
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

## Jest test example
The following test would pass for each shape:

```js
const shape = new Triangle(shapeStr, shapeColor, text, textColor);
shape.setColor("blue");
expect(shape.render()).toEqual("<polygon points='150, 0 0, 200 300, 200' fill='blue' />");
```



