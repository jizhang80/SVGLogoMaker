import Shape from './shapes.js';

export default class Circle extends Shape {
    render() {
        //render shape string like 
        // <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        return `<circle cx="150" cy="100" r="80" fill='${this.color}' />`;
    }
}