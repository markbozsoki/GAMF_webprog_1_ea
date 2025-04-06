class Circle extends ShapeBaseClass {
    radius;

    constructor (diameter) {
        this.radius = diameter / 2;
    }

    CalculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    CalculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    GetAsSVGNode(width_offset, height_offset) {
        let node = document.createElement("circle");
        node.cx = width_offset;
        node.cy = height_offset;
        node.r = this.radius;
        return node;
    }
}