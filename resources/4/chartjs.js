
const ctx = document.getElementById('chartCanvas').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [...document.getElementsByClassName("tableHeaders")],
        datasets: [{
            label: 'Kiválasztott sor',
            data: [],
            borderColor: 'blue',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

document.querySelectorAll("#dataTable tbody tr").forEach(row => {
    row.addEventListener("click", function () {
        const rowData = Array.from(this.children).slice(1).map(td => Number(td.textContent));
        chart.data.datasets[0].data = rowData;
        chart.update();
    });
});
