const Shape = require('./shapes.js');

module.exports = class Triangle extends Shape {
    render() {
        //render shape string
        return `<polygon points='150, 0 0, 200 300, 200' fill='${this.color}' />`;
    }
}