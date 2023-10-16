import Shape from "./shapes.js";

describe('Shape class', () => { 
    const shapeStr = 'Circle';
    const shapeColor = 'red';
    const text = 'svg';
    const textColor = 'white';
    const shape = new Shape(shapeStr, shapeColor, text, textColor)
    shape.setColor('red')

    it('set shape color to red', () => {
        expect(shape.color).toEqual('red');
    });

    it('isColor function works return true if input a named color red', () => { 
        expect(Shape.isColor('red')).toBeTruthy();
     });

     it('isColor function works return true if input a Hex color number', () => { 
        expect(Shape.isColor('#ff0000')).toBeTruthy();
     });

     it('isColor function works return false if input a non-named color aaa', () => { 
        expect(Shape.isColor('aaa')).toBeFalsy();
     });

     it('isColor function works return false if input a non-valid color Hex number', () => { 
        expect(Shape.isColor('#gg0000')).toBeFalsy();
     });
 })