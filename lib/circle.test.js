const Circle = require('./circle.js');

describe('Circle class', () => { 
    const shapeStr = 'Circle';
    const shapeColor = 'red';
    const text = 'svg';
    const textColor = 'white';
    const shape = new Circle(shapeStr, shapeColor, text, textColor)
    shape.setColor(shapeColor)

    it('set shape color to red', () => {
        expect(shape.color).toEqual(shapeColor);
    });

    it('test render return', () => {
      expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='${shapeColor}' />`)
    });
 })