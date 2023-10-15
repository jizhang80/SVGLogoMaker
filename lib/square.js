import Shape from './shapes.js';

export default class Square extends Shape {
    render() {
        //render shape string like 
        // <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        return `<rect x="50" y="0" width="200" height="200" fill='${this.color}' />`;
    }
}