import Shape from './shapes.js';

export default class Triangle extends Shape {
    render() {
        //render shape string like 
        // <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        return `<polygon points="150, 0 0, 200 300, 200" fill='${this.color}' />`;
    }
}