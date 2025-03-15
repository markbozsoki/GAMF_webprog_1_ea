const table_rows = document.querySelectorAll("tbody tr");
const filters = document.querySelectorAll("thead th input");

/// individual eventListeners for all columns
document.getElementById("FullNameFilter").addEventListener("input", filterTableforFullNames);
function filterTableforFullNames() {
    filterTable("FullName");
}
document.getElementById("EmailFilter").addEventListener("input", filterTableforEmails);
function filterTableforEmails() {
    filterTable("Email");
}
document.getElementById("GamerTagFilter").addEventListener("input", filterTableforGamerTag);
function filterTableforGamerTag() {
    filterTable("GamerTag");
}
document.getElementById("PointsFilter").addEventListener("input", filterTableforPoints);
function filterTableforPoints() {
    filterTable("Points");
}

function filterTable(header_id) {
    let column_index = getTableColumnIndexById(header_id) 
    let cell_datas = [];
    table_rows.forEach((row) => {
        let cell_data = row.cells[column_index].textContent.toLowerCase();
        cell_datas.push(cell_data)
    });
    console.log(header_id);
    console.log(cell_datas);

    applied_filter = document.getElementById(header_id + "Filter"); // headers and filters id should begin identically
    console.log(applied_filter)

}

function getTableColumnIndexById(header_id) {
    let header_ids = []
    table_headers.forEach((header) => {
        header_ids.push(header.id); // composing an array containing the header ids
    });
    let column_index = header_ids.indexOf(header_id);
    return column_index;
}
