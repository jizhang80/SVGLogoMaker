const Square = require('./square.js');

describe('Square class', () => { 
    const shapeStr = 'Square';
    const shapeColor = 'red';
    const text = 'svg';
    const textColor = 'white';
    const shape = new Square(shapeStr, shapeColor, text, textColor)
    shape.setColor(shapeColor)

    it('set shape color to red', () => {
        expect(shape.color).toEqual(shapeColor);
    });

    it('test render return', () => {
      expect(shape.render()).toEqual(`<rect x='50' y='0' width='200' height='200' fill='${shapeColor}' />`)
    });
 })