//========================= Line Chart script Start ===========================
function chart(id) {
    var chrt = document.getElementById(id).getContext("2d");
    var chartId = new Chart(chrt, {
        type: 'line',
        data: {
            labels: ["24-08-22 9:00", '26-08-22 12:00', '27-08-22 15:00', "28-08-22 18:00", "29-08-22 20:00"],
            datasets: [{
                label: "Date Wise Vulnerability",
                data: [20, 40, 30, 35, 30, 20],
                backgroundColor: ['lightgreen', 'lightblue', 'lightgrey'],
                borderColor: ['lightgrey'],
                borderWidth: 2,
                pointRadius: 5,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Device Count',
                    },
                },
            },
            legend: {
                display: false,
            },
        },
    });
} 

//========================= Line Chart script End ===========================