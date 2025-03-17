let data_table = document.getElementById("dataTable");
data_table.onload = loadTableData();

function loadTableData() {
    let table_data = [
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

    for (let i = 0; i < data_array.length; i++) { // data_array is expected to be ordered, validated and with the correct length
        cell = new_row.insertCell(i);
        cell.innerHTML = data_array[i];
    }
}
