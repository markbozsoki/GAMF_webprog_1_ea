let circle_container = document.getElementById("circleContainer");
let circle_radius_input = circle_container.querySelector("input");
circle_radius_input.addEventListener("input", updateCircleRadius);

function updateCircleRadius() {
    let circle = circle_container.querySelector("svg circle");
    circle.attributes.r.nodeValue = circle_radius_input.value;
}
