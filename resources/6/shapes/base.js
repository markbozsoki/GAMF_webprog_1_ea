class ShapeBaseClass {
    #node;
    
    constructor() {
        this.#node = null;
    }

    CalculateArea() {
        throw new Error("ERROR: CalculateArea is not implemented yet!");
    }

    CalculatePerimeter() {
        throw new Error("ERROR: CalculatePerimeter is not implemented yet!");
    }

    GetAsSVGNode(width_offset, height_offset) {
        this.#node;
        throw new Error("ERROR: GetAsSVGNode is not implemented yet!");
    }
}