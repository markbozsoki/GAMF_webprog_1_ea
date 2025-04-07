class Circle extends ShapeBaseClass {
    radius;

    constructor(diameter) {
        super();
        this.radius = diameter / 2;
    }

    updateWithArgs(args) {
        this.radius = args[0] / 2;
    }

    GetInputInstructions() {
        return [
            {
                msg: "Adja meg a körátmérőt:",
                min: "default",
                max: "default",
                value: "default"
            }
        ]
    }

    CalculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    CalculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    GetAsSVGNode(width_offset, height_offset) {
        let node = document.createElementNS(this.svg_namespace, "circle");
        node.setAttribute("cx", width_offset);
        node.setAttribute("cy", height_offset);
        node.setAttribute("r", this.radius);
        return node;
    }
}