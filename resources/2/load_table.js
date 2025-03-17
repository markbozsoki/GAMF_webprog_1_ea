




function insertRowToDataTable(data_array) {
    let table = document.querySelectorAll("tbody")[0];
    let new_row = table.insertRow(table.length); // insert empty row to the end of the dataTable

    for (let i = 0; i < data_array.length; i++) { // data_array is expected to be ordered, validated and with the correct length
        cell = new_row.insertCell(i);
        cell.innerHTML = data_array[i];
    }
}
