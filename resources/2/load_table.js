const EDIT_ACTION_BUTTON_TEXT = "Edit";
const DELETE_ACTION_BUTTON_TEXT = "Delete";

let data_table = document.getElementById("dataTable");
data_table.onload = loadTableData();

function loadTableData() {
    let table_data = [ // data to fill the table when it is loaded on the page
        ["Lee Sang-hyeok", "lee.shang@gmail.com", "@Faker", "12000"],
        ["Johan Sundstein", "stndsteing@icloud.com", "@N0tail", "11000"],
        ["Sebastien Dabs", "dabs.rules@freemail.com", "@Ceb", "10000"],
        ["Kuro Takhasomi", "takhasomi@anymail.uk", "@KuroKy", "9000"],
    ];
    for (let i = 0; i < table_data.length; i++) {
        insertRowToDataTable(table_data[i]);
    }
}

function insertRowToDataTable(data_array) {
    let table = document.querySelectorAll("tbody")[0];
    let new_row = table.insertRow(table.length); // insert empty row to the end of the dataTable

    // data_array is expected to be ordered, validated and with the correct length
    for (let i = 0; i < data_array.length; i++) {
        cell = new_row.insertCell(i);
        cell.innerHTML = data_array[i];
    }

    // filling the action column
    let table_headers = document.querySelectorAll("thead th");
    let action_column_index = table_headers.length - 1; // last colunm
    action_cell = new_row.insertCell(action_column_index);

    edit_button_html_element = '<a class="rowEditButton" onClick="editRow(this)">' + EDIT_ACTION_BUTTON_TEXT + "</a>";
    delete_button_html_element = '<a onClick="deleteRow(this)">' + DELETE_ACTION_BUTTON_TEXT + "</a>";
    action_cell.innerHTML = edit_button_html_element + delete_button_html_element;
}
