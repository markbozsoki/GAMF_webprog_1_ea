class Square extends Rectangle {

    constructor(side_length) {
        super(side_length, side_length);
    }

    updateWithArgs(args) {
        this.a_side_length = args[0];
        this.b_side_length = args[0];
    }

    GetInputInstructions() {
        return [
            {
                msg: "Adja meg a négyzet oldalhosszát:",
                min: "default",
                max: "default",
                value: "default"
            }
        ]
    }

    CalculateArea() {
        return super.CalculateArea();
    }

    CalculatePerimeter() {
        return super.CalculatePerimeter();
    }

    GetAsSVGNode(width_offset, height_offset) {
        return super.GetAsSVGNode(width_offset, height_offset);
    }
}