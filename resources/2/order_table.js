const table_header_labels = document.querySelectorAll("thead th label");
const table_rows = document.querySelectorAll("tbody tr");

table_header_labels.forEach((label, index) => {
    let sort_asc = true;
    label.onclick = () => {
        // setting the clicked column to active to change its style
        table_header_labels.forEach(label => label.classList.remove("active"));
        label.classList.add("active");

        // marking the column as ascending
        label.classList.toggle("asc", sort_asc);
        sort_asc = label.classList.contains("asc") ? false : true;

        sortTable(index, sort_asc);
    }
});

function sortTable(columnIndex, sort_asc) {
    let array_rows = [...table_rows] // convert to array
    array_rows.sort((a, b) => {
        let first_row = a.querySelectorAll("td")[columnIndex].textContent.toLowerCase();
        let second_row = b.querySelectorAll("td")[columnIndex].textContent.toLowerCase();

        if (sort_asc) {
            return first_row < second_row ? 1 : -1; // asc
        } else {
            return first_row < second_row ? -1 : 1; // desc
        }
    }).map(sorted_row => document.querySelector("tbody").appendChild(sorted_row)); // apply sort on dataTable

}
