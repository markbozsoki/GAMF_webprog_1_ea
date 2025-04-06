class Triangle extends ShapeBaseClass {
    side_length;
    height;

    constructor (side_length) {
        this.side_length = side_length
        this.height = (side_length * Math.sqrt(3)) / 2;
    }

    CalculateArea() {
        return Math.pow(this.side_length, 2) / 2;
    }

    CalculatePerimeter() {
        return 3 * this.side_length;
    }

    GetAsSVGNode(width_offset, height_offset) {
        let node = document.createElement("polygon");

        let half_side_lenght = (this.side_length / 2);
        let half_height = (this.height / 2);

        let A_x = width_offset;
        let A_y = height_offset + half_height;
        let A = A_x + "," + A_y;

        let B_x = width_offset - half_side_lenght;
        let B_y = height_offset - half_height;
        let B = B_x + "," + B_y;

        let C_x = width_offset + half_side_lenght;
        let C_y = height_offset - half_height;
        let C = C_x + "," + C_y;

        node.points = A + " " + B + " " + C;
        return node;
    }
}