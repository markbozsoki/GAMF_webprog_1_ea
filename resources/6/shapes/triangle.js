class Triangle extends ShapeBaseClass {
    side_length;

    constructor(side_length) {
        super();
        this.side_length = side_length
    }

    updateWithArgs(args) {
        this.side_length = args[0];
    }

    GetInputInstructions() {
        return [
            {
                msg: "Adja meg az egyenlő háromszög oldalhosszát:",
                min: "default",
                max: "default",
                value: "default"
            }
        ]
    }

    CalculateArea() {
        return Math.pow(this.side_length, 2) / 2;
    }

    CalculatePerimeter() {
        return 3 * this.side_length;
    }

    GetAsSVGNode(width_offset, height_offset) {
        let node = document.createElementNS(this.svg_namespace ,"polygon");

        let height = (this.side_length * Math.sqrt(3)) / 2;
        let half_height = (height / 2);

        let half_side_lenght = (this.side_length / 2);

        let A_x = width_offset;
        let A_y = height_offset - half_height;
        let A = A_x + "," + A_y;

        let B_x = width_offset - half_side_lenght;
        let B_y = height_offset + half_height;
        let B = B_x + "," + B_y;

        let C_x = width_offset + half_side_lenght;
        let C_y = height_offset + half_height;
        let C = C_x + "," + C_y;

        node.setAttribute("points", A + " " + B + " " + C);
        return node;
    }
}