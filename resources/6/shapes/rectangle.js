class Rectangle extends ShapeBaseClass {
    a_side_length;
    b_side_length;

    constructor (a_side_length, b_side_length) {
        this.a_side_length = a_side_length;
        this.b_side_length = b_side_length;
    }

    CalculateArea() {
        return this.a_side_length * this.b_side_length;
    }

    CalculatePerimeter() {
        return (this.a_side_length * 2) + (this.b_side_length * 2);
    }

    GetAsSVGNode(width_offset, height_offset) {
        let node = document.createElement("rect");
        node.x = width_offset + (this.a_side_length / 2);
        node.y = height_offset + (this.b_side_length / 2);
        node.width = this.a_side_length;
        node.height = this.b_side_length;
        return node;
    }
}