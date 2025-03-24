let colored_rectangle_container = document.getElementById("coloredRectangleContainer")
let colored_rectangle = colored_rectangle_container.querySelector("button");

colored_rectangle.addEventListener("click", updateColors);
window.onload = updateColors();

function updateColors() {
    let rectangles = colored_rectangle_container.querySelectorAll("svg rect");
    rectangles.forEach((rectangle) => {
        let R_intensity = generateRandomColorIntensity();
        let G_intensity = generateRandomColorIntensity();
        let B_intensity = generateRandomColorIntensity();

        let rectangle_fill_value = "rgb(" + R_intensity + ", " + G_intensity + ", " + B_intensity + ")";
        rectangle.attributes.fill.nodeValue = rectangle_fill_value;
    })
}

function generateRandomColorIntensity() {
    return Math.floor(Math.random() * 256);
}