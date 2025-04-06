class Rectangle extends ShapeBaseClass {
    a_side_length;
    b_side_length;

    constructor(a_side_length, b_side_length) {
        super();
        this.a_side_length = a_side_length;
        this.b_side_length = b_side_length;
    }

    updateWithArgs(args) {
        this.a_side_length = args[0];
        this.b_side_length = args[1];
    }

    GetInputInstructions() {
        return [
            {
                msg: "Adja meg a téglalap egyik oldalhosszát:",
                min: "default",
                max: "default",
                value: "default"
            },
            {
                msg: "Adja meg a téglalap másik oldalhosszát:",
                min: "default",
                max: "default",
                value: 50
            }
        ]
    }

    CalculateArea() {
        return this.a_side_length * this.b_side_length;
    }

    CalculatePerimeter() {
        return (this.a_side_length * 2) + (this.b_side_length * 2);
    }

    GetAsSVGNode(width_offset, height_offset) {
        let node = document.createElementNS(this.svg_namespace, "rect");
        node.setAttribute("x", width_offset - (this.a_side_length / 2));
        node.setAttribute("y", height_offset - (this.b_side_length / 2));
        node.setAttribute("width", this.a_side_length);
        node.setAttribute("height", this.b_side_length);
        return node;
    }
}