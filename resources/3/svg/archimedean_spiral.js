let archimedean_spiral_container = document.getElementById("archimedeanSpiralContainer")
let archimedean_spiral_input = archimedean_spiral_container.querySelector("input");

let radius = 5;
let off_set = 50;

archimedean_spiral_input.addEventListener("input", drawArchimedeanSpiral);
window.onload = drawArchimedeanSpiral();

function drawArchimedeanSpiral() {
    let spiral_points = off_set + "," + off_set;
    if (archimedean_spiral_input.value == 0) {
        setPolygonPoints(spiral_points); // set initial starting point
    }

    for (let i = 0; i < archimedean_spiral_input.value; i = i + 0.001) {
        let new_point = calculateXCoordinate(i) + "," + calculateYCoordinate(i);
        spiral_points = spiral_points + " " + new_point;
    }
    setPolygonPoints(spiral_points);
}

function setPolygonPoints(points) {
    polyline = archimedean_spiral_container.querySelector("svg polyline");
    polyline.attributes.points.nodeValue = points;
}

function calculateXCoordinate(t) {
    return ((radius / (2 * Math.PI)) * t * Math.cos(t)) + off_set; 
}

function calculateYCoordinate(t){
    return ((radius / (2 * Math.PI)) * t * Math.sin(t)) + off_set;
}