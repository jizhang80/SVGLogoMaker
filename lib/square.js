const Shape = require('./shapes.js');

module.exports = class Square extends Shape {
    render() {
        //render shape string
        return `<rect x='50' y='0' width='200' height='200' fill='${this.color}' />`;
    }
}