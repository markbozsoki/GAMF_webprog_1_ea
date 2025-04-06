class ShapeBaseClass {
    svg_namespace = "http://www.w3.org/2000/svg";

    constructor() {

    }

    GetInputInstructions() {
        console.error(this.name + " does not have input instructions!");
        return []
    }

    CalculateArea() {
        throw new Error("ERROR: CalculateArea is not implemented yet!");
    }

    CalculatePerimeter() {
        throw new Error("ERROR: CalculatePerimeter is not implemented yet!");
    }

    GetAsSVGNode(width_offset, height_offset) {
        throw new Error("ERROR: GetAsSVGNode is not implemented yet!");
    }
}