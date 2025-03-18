let search_bar = document.getElementById("searchBar");

search_bar.addEventListener("input", filterTable);

function filterTable(){
    let search_expressin = search_bar.value;
    let table_rows = document.querySelectorAll("tbody tr");

    table_rows.forEach((row) => {
        let row_content = row.textContent;
        let searchable_content_length = row_content.length - EDIT_ACTION_BUTTON_TEXT.length - DELETE_ACTION_BUTTON_TEXT.length
        row_content = row_content.substring(0, searchable_content_length) // removing action column content, because its not valid data
        let should_hide_row = row_content.indexOf(search_expressin) < 0;
        row.classList.toggle("hide", should_hide_row);
    });
}
