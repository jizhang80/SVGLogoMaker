const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

const shapes = { Circle, Triangle, Square }

module.exports = function shapeFactory(shape, shapeColor, text, textColor) {
    if (!Object.keys(shapes).includes(shape)) return;
    const shapeType = shapes[shape];
    return new shapeType(shape, shapeColor, text, textColor);
}