const data_table = document.getElementById("dataTable"); // get dataTable from DOM
const table_headings = document.querySelectorAll("thead th"); // get all headings of dataTable from DOM
const table_rows = document.querySelectorAll("tbody tr"); // get all rows of dataTable from DOM

table_headings.forEach((heading, index) => {
    let sort_asc = true;
    heading.onclick = () => {
        // setting the clicked column to active to change its style
        table_headings.forEach(heading => heading.classList.remove("active"));
        heading.classList.add("active");

        // marking the column as ascending
        heading.classList.toggle("asc", sort_asc);
        sort_asc = heading.classList.contains("asc") ? false : true;

        sortTable(index, sort_asc)
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
