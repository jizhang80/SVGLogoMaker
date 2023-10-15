import Circle from "./circle.js";
import Triangle from "./triangle.js";
import Square from "./square.js";

const shapes = { Circle, Triangle, Square }

export default function shapeFactory(shape) {
    if (!Object.keys(shapes).includes(shape)) return;
    const shapeType = shapes[shape];
    return new shapeType();
}