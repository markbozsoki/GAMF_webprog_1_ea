class Square extends Rectangle {

    constructor (side_length) {
        super(side_length, side_length);
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