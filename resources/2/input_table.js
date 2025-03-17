let form = document.getElementById("dataInputForm");
let validation_error_labels = document.getElementsByClassName("formValidationError");

form.addEventListener("submit", updateTableWithFormData);

function updateTableWithFormData() {
    [...validation_error_labels].forEach(label => label.classList.add("hide"));

    [...validation_error_labels].forEach((label) => {
        what_is_this = label
        if (!label.classList.contains("hide")){
            label.classList.add("hide");
        }
    });  // hide all validation error if visible

    form_data = getFormData();
    if (validateFormData(form_data)) {
        insertRowToTable(form_data); // only insert if validation passes
        resetForm(form_data); // required step because onsubmit="event.preventDefault();" included
    }
}

function getFormData() {
    let form_inputs = document.querySelectorAll("form div input");
    let form_data = {}
    form_inputs.forEach((input) => {
        if (input.type != "submit") { // filter the submit input
            let key = input.id.substring(0, input.id.length - 5) // remove "Filter" taging from the end of the id
            form_data[key] = input.value;
        }
    });
    return form_data;
}

function validateFormData(form_data) {
    let is_valid = true;
    for (let [key, value] of Object.entries(form_data)) {
        let validation_label_id = key + "ValidationError";
        switch (key) {
            case "FullName":
                full_name_validator = new RegExp("^[a-zA-Z-\.\ ]+$"); // allows letters, dots, dashes and whitespaces name format
                if (value.length > 120 || full_name_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id)
                    is_valid = false;
                }
                break;

            case "Email":
                email_validator = new RegExp("^([a-zA-Z\.\-]+)@([a-zA-Z0-9\-]+)((\.([a-zA-Z0-9]){2,3})+)$"); // requires valid email format
                if (value.length > 100 || email_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id)
                    is_valid = false;
                }
                break;

            case "GamerTag":
                gamer_tag_validator = new RegExp("^@[a-zA-Z0-9\.\-]+$"); // requires @ at the start, must be continues text
                regex_ = gamer_tag_validator.exec(value)
                if (value.length > 16 || gamer_tag_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id)
                    is_valid = false;
                }
                break;

            case "Points":
                points_validator = new RegExp("^[0-9]+$"); // allows only positive integer numbers and zero
                x = points_validator.exec(value)
                if (value.length > 16 || points_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id)
                    is_valid = false;
                }
                break;

            default:
                // missing input entity: validation fails
                is_valid = false;
        }
    };
    return is_valid;
}

function markFormInputInvalid(validation_label_id) {
    // makes the validation error text visible
    let validation_error_label = document.getElementById(validation_label_id);
    validation_error_label.classList.remove("hide");
}

function insertRowToTable(form_data) {
    let table = document.querySelectorAll("tbody")[0];
    let new_row = table.insertRow(table.length); // insert empty row to the end of the dataTable
    
    full_name_cell = new_row.insertCell(0);
    full_name_cell.innerHTML = form_data.FullName;

    email_cell = new_row.insertCell(1);
    email_cell.innerHTML = form_data.Email;

    gamer_tag_cell = new_row.insertCell(2);
    gamer_tag_cell.innerHTML = form_data.GamerTag;

    points_cell = new_row.insertCell(3);
    points_cell.innerHTML = form_data.Points;
}

function resetForm(form_data) {
    for (let [key, _] of Object.entries(form_data)) {
        let form_input_id = key + "Input";
        let form_input = document.getElementById(form_input_id);
        form_input.value = "";
    }
}