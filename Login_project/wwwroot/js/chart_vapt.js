function catWiseChartData(id, data) {
    var labels = data.map(function (e) {
        return e.catName;
    });
    var count = data.map(function (e) {
        return e.column1;
    });

    var backgroundColor = "#4682B4"; // Define the background color for bars

    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Categories",
                data: count,
                backgroundColor: backgroundColor,
                borderColor: backgroundColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }, gridLines: {
                        display: false // Remove vertical grid lines
                    }
                }],
            },
            legend: {
                display: true,

                //labels: {
                //    fontColor: backgroundColor, // Set legend label color to match bar color
                //    generateLabels: function (chart) {
                //        return chart.data.labels.map(function (label, i) {
                //            return {
                //                text: label,
                //                fillStyle: backgroundColor, // Set legend label color to match bar color
                //                strokeStyle: backgroundColor, // Set legend label color to match bar color
                //                lineWidth: 1,
                //                hidden: isNaN(chart.data.datasets[0].data[i]),

                //                // Extra data used for toggling the correct item
                //                index: i
                //            };
                //        });
                //    }

            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            animation: {
                duration: 2000, // Duration in milliseconds
                easing: 'easeInOutQuart', // Easing function for animation
                delay: 1000 // Delay before starting the animation
            }
        }
    });
}

function priorityChartBind(id, data) {
    var labels = data.map(function (e) {
        return e.priority;
    });
    var count = data.map(function (e) {
        return e.column1;
    });

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: count,
            backgroundColor: ["#36a5da", "#FEB144", "#FF6961"],
            hoverOffset: 4
        }]
    };

    const ctx = document.getElementById(id).getContext('2d');
    const config = {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
                align: 'center',
                labels: {
                    usePointStyle: true
                }
            }
        }
    };
    new Chart(ctx, config);
}

function SLAWiseChartBind(id, data) {
    var labels = data.map(function (e) {
        return e.documentName; // Use "documentName" as labels
    });
    var count = data.map(function (e) {
        return e.column1; // Use "column1" as counts
    });

    var slaLevels = Array.from(new Set(data.map(function (e) {
        return e.slaLevel; // Extract unique slaLevels
    })));

    var backgroundColor = 'rgba(0, 143, 251, 0.5)';
    var borderColor = 'rgb(0, 143, 251)';

    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                data: count,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false // Remove horizontal grid lines
                    }
                }],
            },
            legend: {
                display: true,
                labels: {
                    generateLabels: function (chart) {
                        var legendLabels = [];
                        slaLevels.forEach(function (level) {
                            legendLabels.push({
                                text: 'Level ' + level,
                                fillStyle: backgroundColor, // Use same color as bars
                                strokeStyle: backgroundColor, // Use same color as bars
                                lineWidth: 1
                            });
                        });
                        return legendLabels;
                    }
                }
            },

            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var datasetIndex = tooltipItem.datasetIndex;
                        var slaLevel = slaLevels[datasetIndex];
                        var count = tooltipItem.xLabel;
                        return "Level: " + slaLevel + ", Count: " + count;
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                delay: 1000
            }
        }
    });
}





function EngineerWiseChartBind(id, data) {
    var seriesData = data.map(function (e) {
        return e.column1;
    });
    var labelsData = data.map(function (e) {
        return e.sdName;
    });

    const chartData = {
        labels: labelsData,
        datasets: [{
            data: seriesData,
            backgroundColor: ["#f79f98", "#91c0e2", "#ffe0a1", "#a4c55d", "#bbbbbb", "#e0b4f1", "#e2aef0", "#e59de9", "#e68cde", "#e77bce", "#e869bd", "#e957ac", "#ea459b"],
            hoverOffset: 4
        }]
    };

    const ctx = document.getElementById(id).getContext('2d');
    const config = {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
                align: 'center',
                labels: {
                    usePointStyle: true
                }
            }

        }
    };
    new Chart(ctx, config);
}

function ouwiseChartBind(id, data) {
    var chartData = prepareChartData(data);

    const config = {
        type: 'bar',
        data: {
            labels: chartData.categories,
            datasets: chartData.seriesData.map((series, index) => {
                return {
                    label: series.name,
                    data: series.data,
                    backgroundColor: index === 0 ? '#91c0e2' : '#ffe0a1', // Set colors based on series index
                    borderWidth: 1
                };
            })
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                },
                y: {
                    stacked: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    align: 'center',
                    labels: {
                        usePointStyle: true
                    }
                }
            }, animation: {
                duration: 2000, // Duration in milliseconds
                easing: 'easeInOutQuart', // Easing function for animation
                delay: 1000 // Delay before starting the animation
            },
        }
    };

    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, config);
}

function prepareChartData(data) {
    var seriesData = [];
    var uniqueStatuses = new Set(["Assigned", "Closed"]);

    data.forEach(function (item) {
        if (uniqueStatuses.has(item.status)) {
            var existingSeries = seriesData.find(function (series) {
                return series.name === item.status;
            });

            if (existingSeries) {
                existingSeries.data.push(item.ouCount);
            } else {
                seriesData.push({
                    name: item.status,
                    data: [item.ouCount]
                });
            }
        }
    });

    var categories = Array.from(new Set(data.map(function (item) {
        return item.ouName;
    })));

    return { seriesData, categories };
}

function DaywiseTicketChartBind(id, data) {
    var createData = data.filter(function (e) {
        return e.status === "Create";
    });

    var closedData = data.filter(function (e) {
        return e.status === "Closed";
    });

    const chartData = {
        labels: data.map(function (e) {
            return moment(e.ticketDate, 'DD/MM/YYYY').format('DD/MM/YYYY');
        }),
        datasets: [{
            label: 'Create',
            data: createData.map(function (e) {
                return e.ticketCount;
            }),
            backgroundColor: 'rgba(0, 191, 255, 0.3)',
            borderColor: '#00bfff',
            borderWidth: 2,
            fill: true,
        }, {
            label: 'Closed',
            data: closedData.map(function (e) {
                return e.ticketCount;
            }),
            backgroundColor: 'rgba(254, 153, 0, 0.3)',
            borderColor: '#fe9900',
            borderWidth: 2,
            fill: true,
        }]
    };

    const ctx = document.getElementById(id).getContext('2d');
    const config = {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'category',
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                    }
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            var label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                },
                legend: {
                    position: 'top',
                    align: 'center',
                    labels: {
                        usePointStyle: true
                    }
                }
            }, animation: {
                duration: 2000, // Duration in milliseconds
                easing: 'easeInOutQuart', // Easing function for animation
                delay: 1000 // Delay before starting the animation
            }
        }
    };

    new Chart(ctx, config);
}
//Only_For_Enginner_UserWise
function EngineerUserWiseChartBind(id, data) {
    var seriesData = data.map(function (e) {
        return e.column1;
    });
    var labelsData = data.map(function (e) {
        return e.srName;;
    });

    const chartData = {
        labels: labelsData,
        datasets: [{
            data: seriesData,
            backgroundColor: ["#f79f98", "#91c0e2", "#ffe0a1", "#a4c55d", "#bbbbbb", "#e0b4f1", "#e2aef0", "#e59de9", "#e68cde", "#e77bce", "#e869bd", "#e957ac", "#ea459b"],
            hoverOffset: 4
        }]
    };

    const ctx = document.getElementById(id).getContext('2d');
    const config = {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
                align: 'center',
                labels: {
                    usePointStyle: true
                }
            }
        }
    };
    new Chart(ctx, config);
}