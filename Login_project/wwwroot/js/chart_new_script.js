
window.Apex = {
    chart: {
        foreColor: 'black', // Change text color
        background: '#FFFFFF', // Change background color
        toolbar: {
            show: false
        },
    },
    stroke: {
        width: 3
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        //theme: 'dark'
    },
    grid: {
        borderColor: "#CCCCCC",
        xaxis: {
            lines: {
                show: true
            }
        }
    }
};

//let colorss = ['#f0b05d', '#68c2df', '#ec726e']
//let colorss = ['#f59b9a', '#9bd8ea', '#e25651']
//let colorss = ['#f4e993','#90EE90','#FF6347']
let colorss = ['#febc3b','#26a0fc','#FF6347']
//let colorss = ['#f4e993', '#f0a025','#e76a3c']
function chart_01() {
    // Sample series data
    var seriesData = [70, 42, 24];

    // Calculate the sum of series values
    var total = seriesData.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    var options = {
        series: seriesData,
        chart: {
            height: 270,
            type: 'radialBar',
            background: '#FFFFFF', // Set background color to dark
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '14px',
                    },
                    value: {
                        fontSize: '14px',
                        color: 'black',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: 'black',
                        formatter: function (w) {
                            return total; // Return the total count
                        }
                    }
                },
                hollow: {
                    size: '40%', // Adjust the size of the center hole
                },
                track: {
                    background: '#FFFFFF', // Set background color for inactive part of the bar
                    strokeWidth: '30%', // Set the width of the inactive track
                },
            }
        },
        labels: ['Low', 'Medium', 'High'],
         colors: colorss, // Assuming colorss is defined somewhere
        fill: {
           colors: colorss, // Directly specify colors without gradient
        },
        stroke: {
            lineCap: 'round', // Set line cap to round for curved ends
            width: 20, // Set the width of the bars
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 200,
                    width: 200
                }
            }
        }],
        responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    height: 350 // Adjust height for smaller screens if needed
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

function chart_02() {
    var optionsArea = {
        chart: {
            height: 270,
            type: 'area',
            stacked: false,
        },
        stroke: {
            curve: 'straight'
        },
        series: [{
            name: "Low",
            data: [4, 12, 6, 33, 22, 42, 19, 20, 33, 27]
        },
        {
            name: "Medium",
            data: [22, 19, 26, 32, 10, 25, 11, 32, 6, 9]
        },
        {
            name: "High",
            data: [32, 12, 20, 18, 21, 26, 8, 12, 38, 41]
        }
        ],

        xaxis: {
            categories: ['192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01'],
            labels: {
                style: {
                    fontSize: '9px',
                    fontFamily: 'Arial, sans-serif',
                }
            }
        },
        tooltip: {
            followCursor: true,
            style: {
                fontSize: '10px',
                fontFamily: 'Arial, sans-serif',
            },
            x: {
                show: true,
                format: 'dd/MM/yy HH:mm',
                formatter: undefined
            },
            y: {
                formatter: undefined
            },
        },
        fill: {
            opacity: 1,
        },
        colors: colorss,  // Custom colors for bars and area
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: 10,
        },
        responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    height: 350 // Adjust height for smaller screens if needed
                }
            }
        }]
    };

    var chartArea = new ApexCharts(document.querySelector("#areachart"), optionsArea);
    chartArea.render();
}

function chart_03() {
    var optionsLine = {
        chart: {
            height: 270,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                top: 2,
                left: 2,
                blur: 2,
                opacity: 2,
                color: '#bdbdbd'
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        //colors: ["#3F51B5", '#2196F3'],
        series: [{
            name: "Low",
            data: [1, 15, 26, 20, 33, 27, 15, 26, 20, 33,]
        },
        {
            name: "Medium",
            data: [3, 33, 15, 26, 20, 33, 21, 42, 19, 32]
        },
        {
            name: "High",
            data: [0, 15, 26, 20, 33, 39, 52, 11, 29, 43]
        }
        ],
        markers: {
            size: 6,
            strokeWidth: 0,
            hover: {
                size: 9
            }
        },
        grid: {
            show: true,
            padding: {
                bottom: 0
            }
        },
        labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/18/2002'],
        xaxis: {
            tooltip: {
                enabled: false
            },
            labels: {
                style: {
                    fontSize: '9px', // Adjust the font size as needed
                    fontFamily: 'Arial, sans-serif', // Specify font family if needed
                }
            }
        },
        colors: colorss,
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: 10,
        }
    }

    var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
    chartLine.render();

}


function chart_05() {
    var options = {
        series: [{
            name: 'Low',
            data: [44, 53, 41, 37, 22, 15,10]
        },
        {
            name: 'Medium',
            data: [53, 30, 25, 24, 20, 18, 15]
        },
        {
            name: 'High',
            data: [12, 15, 14, 13, 12, 11, 10]
        },
        ],
        chart: {
            type: 'bar',
            height: 273,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: '9px',
                            fontWeight: 900
                        }
                    }
                },
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        colors: colorss,
        xaxis: {
            categories: ['192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01'],
            labels: {
                formatter: function (val) {
                    return val
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: 10
        }
    };

    var chart = new ApexCharts(document.querySelector("#Horizontal_chart"), options);
    chart.render();

}




let mychartDoughnut = null
function renderDoughnutChart(id, jsonString) {
    const data = JSON.parse(jsonString);

    // Configuration options for the doughnut chart
    const config = {
        type: 'doughnut',
        height: 269,
        data: {
            labels: data.labels,
            datasets: [{
                data: data.datasets[0].data,
                backgroundColor: [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
   " #9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
   "#17becf"
                ]
            }]
        },
        options: {
            responsive: true, // Enable responsiveness
            maintainAspectRatio: false, // Disable aspect ratio
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'center', // Start from left
                    labels: {
                        fontSize: 6, // Set font size of legend labels
                        usePointStyle: false, // Use custom point style for legend marker
                        pointStyle: 'rect', // Set point style to rectangle
                        boxWidth: 12
                    },
                },
            },

        }
    };

    // Get the canvas element
    var ctx = document.getElementById(id).getContext('2d');
    if (mychartDoughnut) {
        mychartDoughnut.destroy();
    }
    // Create the doughnut chart
    mychartDoughnut = new Chart(ctx, config);
}



let myChart = null;
// Function to render the polar chart
function chart_polar(id, jsonData) {
    const data = JSON.parse(jsonData);
    const config = {
        type: 'polarArea',
        height: 269,
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'left',
                    labels: {
                        fontSize: 10,
                        usePointStyle: false,
                        pointStyle: 'rect',
                        boxWidth: 12
                    }
                }
            }
        }
    };

    const ctx = document.getElementById(id).getContext('2d');

    // If a chart already exists, destroy it before rendering a new one
    if (myChart) {
        myChart.destroy();
    }

    // Render the new chart
    myChart = new Chart(ctx, config);
}


///modal_charts
function chartModel_01(id, data) {
    const dataArray = JSON.parse(data);

    // Extracting categories
    const categories = dataArray[0].categories;

    // Extracting series data for each category
    const seriesData = Object.keys(dataArray[0])
        .filter(key => key !== 'categories')
        .map(label => ({
            name: label,
            data: dataArray[0][label].data
        }));

    var optionsBar = {
        chart: {
            height: 340,
            type: 'bar',
            stacked: true,
            events: {
                dataPointSelection: function (event, chartContext, config) {
                    SeverityWiseVulnerability();
                    return;
                }
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                horizontal: false,

            },
            // Custom colors for bars
        },
        colors: colorss,
        series: seriesData,
        xaxis: {
            categories: categories,
        },
        grid: {
            show: true,
            borderColor: '#f7f7f7',
            padding: {
                left: 0,
                right: 0
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            offsetX: 10,
            offsetY: 10
        }
    };


    var chartBar = new ApexCharts(document.querySelector(id), optionsBar);

    chartBar.render();
}

//sub model
function renderRadarChart(id, jsonString) {
    const data = JSON.parse(jsonString);

    // Assign the desired colors to the colorss variable
    const colors = colorss;

    var options = {
        series: data.series.map((serie, index) => ({
            ...serie,
            color: colors[index] // Assign custom color to each series
        })),
        chart: {
            height: 270,
            type: 'radar',
            events: {
                click: function (event, chartContext, config) {
                    VulnerabilitySummary();
                }
            },
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        plotOptions: {
            radar: {
                clickable: true // Enable clicking on data points
            }
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1,
            colors: colorss // Use custom colors for fill
        },
        legend: {
            show: false // Hide the legend
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: data.categories
        },
        tooltip: {
            enabled: true,
        }
    };

    var chart = new ApexCharts(document.querySelector(id), options);
    chart.render();
}

