var selected_shape = null;

let input_args = document.getElementById("args");
let outputs = document.getElementById("outputs");
let shape_container = document.getElementById("shapeContainer")

let shape_selectors = document.getElementById("shapeSelector").querySelectorAll("label input");
shape_selectors.forEach((radio_button) => {
    radio_button.addEventListener("click", updateParametersFieldset);
});
window.onload = updateParametersFieldset();

function updateParametersFieldset() {
    let selected_radio_button_value = "";
    shape_selectors.forEach((radio_button) => {
        if (radio_button.checked) {
            selected_radio_button_value = radio_button.value;
        }
    });

    clearInputArgs();
    switch (selected_radio_button_value) {
        case Circle.name:
            appendNumberInputNode("Adja meg a körátmérőt:", 1, 400);
            break;
        case Square.name:
            appendNumberInputNode("Adja meg a négyzet oldalhosszát:", 1, 400)
            break;
        case Rectangle.name:
            appendNumberInputNode("Adja meg a téglalap oldalhosszát:", 1, 400)
            break;
        case Triangle.name:
            appendNumberInputNode("Adja meg a háromszög oldalhosszát:", 1, 400)
            break;
        default:
            console.error("No case with value of \"" + selected_radio_button_value + "\" from shape_selectors!");
            return;
    }

    function appendNumberInputNode(instruction, min, max) {
        let new_number_input = document.createElement("input");
        new_number_input.type = "number";
        new_number_input.min = String(min);
        new_number_input.max = String(max);
        new_number_input.value = new_number_input.min;
        new_number_input.addEventListener("input", clearOutputs)

        let new_arg_label = document.createElement("label");
        new_arg_label.innerHTML = instruction + " ";
        new_arg_label.appendChild(new_number_input);

        input_args.appendChild(new_arg_label);
        input_args.appendChild(document.createElement("br"))
    }
}

let show_button = document.getElementById("show");
show_button.addEventListener("click", () => {
    if (selected_shape == null)
        return;

    shape_container.removeChild(shape_container.lastChild);
    let new_shape_node = selected_shape.GetAsSVGNode(
        shape_container.offsetWidth,
        shape_container.offsetHeight
    );
    shape_container.appendChild(new_shape_node);
});

let area_button = document.getElementById("area");
area_button.addEventListener("click", () => {
    if (selected_shape == null)
        return;

    updateShapeObject()
    updateResults("Az alakzat területe: " + selected_shape.CalculateArea());
});

let perimeter_button = document.getElementById("perimeter");
perimeter_button.addEventListener("click", () => {
    if (selected_shape == null)
        return;

    updateShapeObject()
    updateResults("Az alakzat kerülete: " + selected_shape.CalculatePerimeter());
});

function updateShapeObject() {
    let args = [];
    input_args.forEach((input) => {
        args.push(input.value);
    });
    selected_shape.updateWithArgs(args);
}

function updateResults(message) {
    clearOutputs();
    let child_label = document.createElement("label");
    child_label.innerHTML = message;
    outputs.appendChild(child_label);
    outputs.appendChild(document.createElement("br"))
}

function clearInputArgs() {
    removeAllChildByNodeType(input_args, "label");
    removeAllChildByNodeType(input_args, "br");
}

function clearOutputs() {
    removeAllChildByNodeType(outputs, "label");
    removeAllChildByNodeType(outputs, "br");
}

function removeAllChildByNodeType(parent_node, node_type) {
    let child_nodes = parent_node.querySelectorAll(node_type);
    if (child_nodes.length == 0)
        return;

    child_nodes.forEach((child) => {
        child.parentNode.removeChild(child);
    });
}