let DEFAULT_VALIDATION_ERROR_MESSAGE = "A megadott érték hibás!";
let REQUIRED_FIELD_INPUT_ERROR_MESSAGE = "Mező kitöltése kötelező!";

let form = document.getElementById("dataInputForm");
let validation_error_labels = document.getElementsByClassName("formValidationError");

form.addEventListener("submit", updateTableWithFormData);

function updateTableWithFormData() {
    [...validation_error_labels].forEach((label) => {
        label.innerHTML = DEFAULT_VALIDATION_ERROR_MESSAGE; // reset error message
        if (!label.classList.contains("hide")) {
            label.classList.add("hide"); // reset visibillity
        }
    });  // hide all validation errors if any visible

    form_data = getFormData();
    if (!validateFormData(form_data)) {
        return; // only proceed if validation passes on form inputs
    }

    row_data_array = [
        form_data.FullName,
        form_data.Email,
        form_data.GamerTag,
        form_data.Points,
    ];
    if (table_row_to_edit != null) {
        updateCurrentlyEditedDataTableRow(row_data_array);
    } else {
        insertRowToDataTable(row_data_array);
    }

    resetForm(form_data); // required step because onsubmit="event.preventDefault();" included
}

function getFormData() {
    let form_inputs = document.querySelectorAll("form div input");
    let form_data = {};
    form_inputs.forEach((input) => {
        if (input.type != "submit") { // filter the submit input
            let key = input.id.substring(0, input.id.length - "Input".length); // remove "Input" taging from the end of the id
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
                if (value == "") {
                    markFormInputInvalid(validation_label_id, REQUIRED_FIELD_INPUT_ERROR_MESSAGE);
                    is_valid = false;
                    break;
                }
                full_name_validator = new RegExp("^[a-zA-Z-\.\ ]+$"); // allows letters, dots, dashes and whitespaces name format
                if (full_name_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id, "Helytelen karakter a névben! (a-z, A-Z, -, .)");
                    is_valid = false;
                    break;
                }
                if (value.length >= 120) {
                    markFormInputInvalid(validation_label_id, "Túl hosszú név! (maximum 120 karakter)");
                    is_valid = false;
                    break;
                }
                break;

            case "Email":
                if (value == "") {
                    markFormInputInvalid(validation_label_id, REQUIRED_FIELD_INPUT_ERROR_MESSAGE);
                    is_valid = false;
                    break;
                }
                email_validator = new RegExp("^([a-zA-Z0-9\.\-]+)@([a-zA-Z\-]+)((\.([a-zA-Z]){2,3})+)$"); // requires valid email format
                if (email_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id, "Az email cím formátuma nem megfelelő!");
                    is_valid = false;
                    break;
                }
                if (value.length >= 100) {
                    markFormInputInvalid(validation_label_id, "Az email cím túl hosszú! (maximum 100 karakter)");
                    is_valid = false;
                    break;
                }
                break;

            case "GamerTag":
                if (value == "") {
                    markFormInputInvalid(validation_label_id, REQUIRED_FIELD_INPUT_ERROR_MESSAGE);
                    is_valid = false;
                    break;
                }
                if (value == "@") {
                    markFormInputInvalid(validation_label_id, "Addj meg egy becenevet!");
                    is_valid = false;
                    break;
                }
                if (value[0] != "@") {
                    markFormInputInvalid(validation_label_id, "A becenév @ karakterrel kell hogy kezdődjön!");
                    is_valid = false;
                    break;
                }
                gamer_tag_validator = new RegExp("^@[a-zA-Z0-9\.\-]+$"); // requires @ at the start, must be continues text
                if (gamer_tag_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id, "A becenévben nem megfelelő karakter van! (a-z, 0-9, ., -)");
                    is_valid = false;
                    break;
                }
                if (value.length >= 16) {
                    markFormInputInvalid(validation_label_id, "A becenév túl hosszú! (maximum 15 karakter az @ után)");
                    is_valid = false;
                    break;
                }
                break;

            case "Points":
                if (value == "") {
                    markFormInputInvalid(validation_label_id, REQUIRED_FIELD_INPUT_ERROR_MESSAGE);
                    is_valid = false;
                    break;
                }
                if (value.length >= 32) {
                    markFormInputInvalid(validation_label_id, "A megadott szám túl hosszú! (maximum 32 karakter)");
                    is_valid = false;
                    break;
                }
                points_validator = new RegExp("^[0-9]+$"); // allows only positive integer numbers and zero
                if (points_validator.exec(value) == null) {
                    markFormInputInvalid(validation_label_id, "Kizárólag pozitív egész számok engedélyezettek!");
                    is_valid = false;
                    break;
                }
                break;

            default:
                alert("missing input entity: validation failed!"); // developer message
                return false;
        }
    };
    return is_valid;
}

function markFormInputInvalid(validation_label_id, error_message) {
    // makes the validation error text visible
    if (error_message == null || error_message == "") {
        error_message = DEFAULT_VALIDATION_ERROR_MESSAGE;
    }
    let validation_error_label = document.getElementById(validation_label_id);
    validation_error_label.innerHTML = error_message;
    validation_error_label.classList.remove("hide");
}

function resetForm(form_data) {
    for (let [key, _] of Object.entries(form_data)) {
        let form_input_id = key + "Input";
        let form_input = document.getElementById(form_input_id);
        form_input.value = "";
    }
}
