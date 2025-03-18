
const ctx = document.getElementById('chartCanvas').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Érték 1', 'Érték 2', 'Érték 3', 'Érték 4', 'Érték 5'],
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
