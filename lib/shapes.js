const fs = require('fs');
const validateColor = require('validate-color').default;

module.exports = class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.color = shapeColor;        // shape color
        this.width = '300';     // svg width, default 300
        this.height = '200';    // svg height, default 200
        this.shape = shape;        // svg shape string
        this.text = text;         // svg text
        this.textColor = textColor;    // text color
        this.textX = '150';        // text position x
        this.textY = '125';        // text position y
        this.textFontSize = "60"    // text font size, default 60
        this.textAnchor = 'middle'; // text anchor position, default middle
    }

    setColor(colorStr) {
        // set shape color
        this.color = colorStr;
    }

    render() {
        //render shape string like, not really do something here
        // <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        return ``;
    }

    async draw() {
        // draw svg to a file
        const svgContent = `
        <svg version='1.1' width='${this.width}' height='${this.height}' xmlns="http://www.w3.org/2000/svg">
            ${this.render()}
            <text x='${this.textX}' y='${this.textY}' font-size='${this.textFontSize}' text-anchor='${this.textAnchor}' fill='${this.textColor}' >${this.text}</text>
        </svg>`
        const fileName = `${this.shape}-${this.text}.svg`;
        try {
            await fs.promises.writeFile(`${__dirname}/../examples/${fileName}`, svgContent);
            // file write done
            console.log(`${fileName} written successfully in folder examples!`);
        } catch (err) {
            console.error(err);
        }
    }

    static isColor(colorStr) {
        // check if the color string is a named color like red/blue or a Hex color number
        if (validateColor(colorStr)) {
            return true;
        };
        return false;
    }
}