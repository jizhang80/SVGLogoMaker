const Triangle = require('./triangle.js');

describe('Triangle class', () => { 
    const shapeStr = 'Triangle';
    const shapeColor = 'red';
    const text = 'svg';
    const textColor = 'white';
    const shape = new Circle(shapeStr, shapeColor, text, textColor)
    shape.setColor(shapeColor)

    it('set shape color to red', () => {
        expect(shape.color).toEqual(shapeColor);
    });

    it('test render return', () => {
      expect(shape.render()).toEqual(`<polygon points='150, 0 0, 200 300, 200' fill='${this.color}' />`)
    });
 })