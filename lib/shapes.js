import * as fs from 'fs';
import pkg from 'validate-color';
const {validateHTMLColorHex, validateHTMLColorName} = pkg;

export default class Shape {
    constructor() {
        this.color = '';        // shape color
        this.width = '300';     // svg width, default 300
        this.height = '200';    // svg height, default 200
        this.shape = '';        // svg shape string
        this.points = '';       // shape points
        this.text = '';         // svg text
        this.textColor = '';    // text color
        this.textX = '';        // text position x
        this.textY = '';        // text position y
        this.textFontSize = "60"    // text font size, default 60
        this.textAnchor = 'middle'; // text anchor position, default middle
    }

    setShape(shapeStr) {
        // shapeStr = circle/triangle/square
        this.shape = shapeStr;
    }

    setColor(colorStr) {
        // set shape color
        this.color = colorStr;
    }

    setTextColor(colorStr) {
        // set text color
        this.textColor = colorStr;
    }

    setText(text) {
        // set svg text
        this.text = text;
    }

    setPoints(points) {
        // set shape points
        this.points = points;
    }

    render() {
        //render shape string like 
        // <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        retrun ``
    }

    draw() {
        const svgContent = `
        <svg version='1.1' width=${this.width} height=${this.height} xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            <text x=${this.textX} y=${this.textY} font-size=${this.textFontSize} text-anchor=${this.textAnchor} fill=${this.textColor} >${this.text}</text>
        </svg>`
        const fileName = `${this.shape}-${this.text}.svg`;
        fs.writeFile(`../examples/${fileName}`, svgContent, err=>{
            if (err) console.error(err);
            // file write done
            console.log(`${fileName} written successfully!`);
        });
    }

    static isColor(colorStr) {
        // check if the color string is a named color like red/blue or a Hex color number
        if (validateHTMLColorHex(colorStr)||validateHTMLColorName(colorStr)) {
            return true;
        };
        return false;
    }
}