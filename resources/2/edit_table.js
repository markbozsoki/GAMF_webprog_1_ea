var table_row_to_edit = null;

function editRow(edit_button) {
    clearEditButtonsClickedStyle();
    edit_button.classList.add("clicked"); // marking row that the user is currently editing

    let table_data = edit_button.parentElement;
    let table_row = table_data.parentElement;

    table_row_to_edit = table_row;
    loadRowDataToForm(table_row);
}

function loadRowDataToForm(table_row) {
    let table_headers = document.querySelectorAll("thead th");
    let form_inputs = document.querySelectorAll("form div input");

    for (let i = 0; i < table_headers.length - 1; i++) {
        let destination_input = form_inputs[i]
        let cell = table_row.cells[i];
        destination_input.value = cell.innerText;
    }
}

function updateCurrentlyEditedDataTableRow(data_array) {
    for (let i = 0; i < data_array.length; i++) { // data_array is expected to be ordered, validated and with the correct length
        table_row_to_edit.cells[i].innerText = data_array[i];
    }

    // cleanup
    clearEditButtonsClickedStyle();
    table_row_to_edit = null;
}

function clearEditButtonsClickedStyle() {
    let row_edit_buttons = [...document.getElementsByClassName("rowEditButton")];
    row_edit_buttons.forEach(button => button.classList.remove("clicked"));
}

function deleteRow(delete_button) {
    let table_data = delete_button.parentElement;
    let table_row = table_data.parentElement;
    
    if (table_row == table_row_to_edit) {
        // disallow user to delete a row that is currently edited
        alert("Nem törölhetsz módosítás alatt álló sort!");
        return;
    }

    if (confirm("Biztosan törölni szeretnéd a táblázat " + table_row.rowIndex + ". sorát?")) {
        let table = document.querySelectorAll("tbody")[0];
        table.deleteRow(table_row.rowIndex - 1); // rowIndex starts from 1
    }
}
