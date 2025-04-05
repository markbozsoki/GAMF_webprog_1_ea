let canvas = document.querySelector("canvas")
let draw_context = canvas.getContext("2d");

let brush_color_input = document.getElementById("controls").querySelector("input");
let clear_button = document.getElementById("controls").querySelector("button");
clear_button.addEventListener("click", () => {
    draw_context.clearRect(0, 0, canvas.width, canvas.height);
});

let is_drawing_enabled = false;
canvas.addEventListener("click", () => {
    is_drawing_enabled = !is_drawing_enabled
});

canvas.addEventListener("mousemove", (mouseinfo) => {
    if (is_drawing_enabled == false) {
        return;
    }
    let mouse_X_coord = mouseinfo.x;
    let mouse_Y_coord = mouseinfo.y;

    let canvas_rectangle = canvas.getBoundingClientRect();
    let canvas_X_offset = canvas_rectangle.left;
    let canvas_Y_offset = canvas_rectangle.top;

    let X = mouse_X_coord - canvas_X_offset;
    let Y = mouse_Y_coord - canvas_Y_offset;

    let brush_color = brush_color_input.value

    draw_context.beginPath();
    draw_context.strokeStyle = brush_color;
    draw_context.rect(X, Y, 1, 1);
    draw_context.stroke();
});
