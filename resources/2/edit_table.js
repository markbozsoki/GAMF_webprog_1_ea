

function deleteRow(delete_button){
    if(confirm("Are you sure about deleting this row?")) {
        let table_data = delete_button.parentElement;
        let table_row = table_data.parentElement;
        let table = document.querySelectorAll("tbody")[0];
        table.deleteRow(table_row.rowIndex - 1); // rowIndex starts from 1
    }
}
