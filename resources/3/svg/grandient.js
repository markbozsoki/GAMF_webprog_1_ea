let gradient_container = document.getElementById("gradientContainer")
let gradient_input = gradient_container.querySelector("input");
gradient_input.addEventListener("input", updateGradient);

function updateGradient() {
    let gradient_stop_offset = gradient_container.querySelectorAll("svg defs linearGradient stop");
    let red_gradient_stop_offset = gradient_stop_offset[0];
    let green_gradient_stop_offset = gradient_stop_offset[1];

    let red_offset_value = getGradientOffsetValue(red_gradient_stop_offset);
    let green_offset_value = getGradientOffsetValue(green_gradient_stop_offset);

    if (gradient_input.value >= 0) {
        red_offset_value = gradient_input.value
        green_offset_value = 100;
    }
    else {
        red_offset_value = 0;
        green_offset_value = 100 + Number(gradient_input.value);
    }

    setGradientOffsetValue(red_gradient_stop_offset, red_offset_value);
    setGradientOffsetValue(green_gradient_stop_offset, green_offset_value)
}

function getGradientOffsetValue(gradient_stop_offset) {
    return Number(gradient_stop_offset.attributes.offset.nodeValue.trim("%"));
}

function setGradientOffsetValue(gradient_stop_offset, offset_value) {
    gradient_stop_offset.attributes.offset.nodeValue = offset_value + "%";
}
