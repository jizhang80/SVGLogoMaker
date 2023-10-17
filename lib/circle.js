const Shape = require('./shapes.js');

module.exports = class Circle extends Shape {
    render() {
        //render shape string
        return `<circle cx='150' cy='100' r='80' fill='${this.color}' />`;
    }
}