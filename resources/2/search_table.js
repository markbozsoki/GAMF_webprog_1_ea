let search_bar = document.getElementById("searchBar");

search_bar.addEventListener("input", filterTable);

function filterTable(){
    let search_expressin = search_bar.value;
    let table_rows = document.querySelectorAll("tbody tr");

    table_rows.forEach((row) => {
        let row_content = row.textContent;
        let should_hide_row = row_content.indexOf(search_expressin) < 0;
        row.classList.toggle("hide", should_hide_row);
    });
}
