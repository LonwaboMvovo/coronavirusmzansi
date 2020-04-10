const number = document.querySelectorAll('.number');

const selected_province_info = document.querySelector('#selected_province_info');
const province_breakdown = document.querySelector('#province_breakdown');
const provinces = document.getElementsByTagName('path');
const ZAF1188 = document.querySelector('#ZAF1188');
const ZAF1189 = document.querySelector('#ZAF1189');
const ZAF1201 = document.querySelector('#ZAF1201');
const ZAF1206 = document.querySelector('#ZAF1206');
const ZAF1208 = document.querySelector('#ZAF1208');
const ZAF1209 = document.querySelector('#ZAF1209');
const ZAF1210 = document.querySelector('#ZAF1210');
const ZAF1216 = document.querySelector('#ZAF1216');
const ZAF1926 = document.querySelector('#ZAF1926');

const total_cases_graphs = document.querySelector('#total_cases_graphs').getContext('2d');
const global_total_cases_graphs = document.querySelector('#global_total_cases_graphs').getContext('2d');
const daily_new_graphs = document.querySelector('#daily_new_graphs').getContext('2d');
const global_daily_new_graphs = document.querySelector('#global_daily_new_graphs').getContext('2d');
const active_graphs = document.querySelector('#active_graphs').getContext('2d');
const global_active_graphs = document.querySelector('#global_active_graphs').getContext('2d');
const total_deaths_graphs = document.querySelector('#total_deaths_graphs').getContext('2d');
const global_total_deaths_graphs = document.querySelector('#global_total_deaths_graphs').getContext('2d');
const daily_deaths_graphs = document.querySelector('#daily_deaths_graphs').getContext('2d');
const global_daily_deaths_graphs = document.querySelector('#global_daily_deaths_graphs').getContext('2d');

async function fetchCoronaInfoSa() {
    try {
        const response = await fetch('https://corona.lmao.ninja/countries/south%20africa');
        const data = await response.json();
        number[0].textContent = data.tests;
        number[1].textContent = data.cases;
        number[2].textContent = data.active;
        number[3].textContent = data.recovered;
        number[4].textContent = data.critical;
        number[5].textContent = data.deaths;
    } catch (err) {
        console.log('latest: manuel input');
    }
}
fetchCoronaInfoSa();

ZAF1188.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Northern Cape';
    province_breakdown.textContent = 'Cases: 15 Deaths: 0';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1188.style.fill = '#2d545e';
})

ZAF1189.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Western Cape';
    province_breakdown.textContent = 'Cases: 541 Deaths: 6';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1189.style.fill = '#2d545e'
})

ZAF1201.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: North West';
    province_breakdown.textContent = 'Cases: 18 Deaths: 0';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1201.style.fill = '#2d545e'
})

ZAF1206.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Free State';
    province_breakdown.textContent = 'Cases: 94 Deaths: 3';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1206.style.fill = '#2d545e'
})

ZAF1208.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Gauteng';
    province_breakdown.textContent = 'Cases: 801 Deaths: 3';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1208.style.fill = '#2d545e'
})

ZAF1209.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Mpumalanga';
    province_breakdown.textContent = 'Cases: 20 Deaths: 0';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1209.style.fill = '#2d545e'
})

ZAF1210.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Limpopo';
    province_breakdown.textContent = 'Cases: 24 Deaths: 0';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1210.style.fill = '#2d545e'
})

ZAF1216.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: KwaZulu Natal';
    province_breakdown.textContent = 'Cases: 412 Deaths: 12';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1216.style.fill = '#2d545e'
})

ZAF1926.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Eastern Cape';
    province_breakdown.textContent = 'Cases: 68 Deaths: 0';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1926.style.fill = '#2d545e'
})

const total_cases_graphsChart = new Chart(total_cases_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#2d545e',
            borderWidth: 1,
            pointBorderWidth: 0.1,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: '#2d545e',
            lineTension: 0.2,
            data: [1, 1, 2, 3, 7, 7, 13, 16, 24, 38, 61, 64, 85, 116, 150, 202, 240, 274, 402, 554, 709, 927, 1170, 1187, 1280, 1326, 1353, 1380, 1462, 1505, 1585, 1655, 1686, 1749, 1845, 1934]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'SA Total Cases',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});
const global_total_cases_graphsChart = new Chart(global_total_cases_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'black',
            borderWidth: 1,
            pointBorderWidth: 0.1,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'black',
            lineTension: 0.2,
            data: [98425, 102050, 106099, 109991, 114381, 118948, 126214, 134509, 145416, 156475, 169511, 182431, 198159, 218840, 244985, 275677, 305106, 337586, 379079, 422914, 471471, 532465, 597018, 663779, 724042, 785828, 859620, 936637, 1016734, 1118414, 1203235, 1274653, 1348667, 1433741, 1518126, 1603694]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Global Total Cases',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});

const daily_new_graphsChart = new Chart(daily_new_graphs, {
    type: 'bar',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: '#2d545e',
            barPercentage: 0.1,
            barThickness: 'flex',
            maxBarThickness: 8,
            minBarLength: 2,
            data: [1, 0, 1, 1, 4, 0, 6, 3, 8, 14, 23, 3, 21, 31, 34, 52, 38, 34, 128, 152, 155, 218, 243, 17, 93, 46, 27, 27, 82, 43, 80, 70, 31, 63, 96, 89]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'SA Cases per Day',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});
const global_daily_new_graphsChart = new Chart(global_daily_new_graphs, {
    type: 'bar',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'black',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [3111, 3625, 4049, 3892, 4390, 4567, 7266, 8295, 10907, 11059, 13036, 12920, 15728, 20681, 26145, 30692, 29429, 32480, 41493, 43835, 48557, 60994, 64553, 66761, 60263, 61786, 73792, 77017, 80097, 101680, 84821, 71418, 74014, 85074, 84385, 85568]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Global Cases per Day',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});

const active_graphsChart = new Chart(active_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#2d545e',
            borderWidth: 1,
            pointBorderWidth: 0.1,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: '#2d545e',
            lineTension: 0.2,
            data: [1, 1, 2, 3, 7, 7, 13, 16, 24, 38, 61, 64, 85, 116, 150, 202, 238, 272, 398, 550, 697, 915, 1138, 1155, 1247, 1292, 1317, 1325, 1407, 1401, 1481, 1549, 1579, 1641, 1732, 1821]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'SA Currently Infected People',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});
const global_active_graphsChart = new Chart(global_active_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'black',
            borderWidth: 1,
            pointBorderWidth: 0.1,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'black',
            lineTension: 0.2,
            data: [39433, 40947, 42328, 43886, 46300, 48031, 53279, 59168, 67413, 74717, 85538, 95640, 107556, 124548, 146790, 172715, 196597, 224316, 260491, 295122, 335940, 384424, 436577, 490926, 538626, 582623, 639139, 695218, 751288, 830832, 891976, 941753, 995294, 1049477, 1099309, 1151564]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Global Currently Infected People',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});

const total_deaths_graphsChart = new Chart(total_deaths_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#2d545e',
            borderWidth: 1,
            pointBorderWidth: 0.1,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: '#2d545e',
            lineTension: 0.2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 5, 5, 5, 9, 9, 11, 12, 13, 18, 18]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'SA Total Deaths',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});
const global_total_deaths_graphsChart = new Chart(global_total_deaths_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'black',
            borderWidth: 1,
            pointBorderWidth: 0.1,
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'black',
            lineTension: 0.2,
            data: [3387, 3494, 3599, 3827, 4025, 4296, 4628, 4981, 5428, 5833, 6520, 7162, 7979, 8951, 10030, 11386, 13011, 14640, 16514, 18895, 21283, 24074, 27345, 30863, 34067, 37776, 42313, 47203, 53182, 58897, 64696, 69433, 74660, 82046, 88460, 95693]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Global Total Deaths',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});

const daily_deaths_graphsChart = new Chart(daily_deaths_graphs, {
    type: 'bar',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: '#2d545e',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 4, 0, 2, 1, 1, 5, 0]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'SA Deaths per Day',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});
const global_daily_deaths_graphsChart = new Chart(global_daily_deaths_graphs, {
    type: 'bar',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', '', ''],
        datasets: [{
            backgroundColor: 'black',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [102, 107, 105, 228, 198, 271, 332, 353, 447, 405, 687, 642, 817, 972, 1079, 1356, 1625, 1629, 1874, 2381, 2388, 2791, 3271, 3518, 3204, 3709, 4537, 4890, 5979, 5715, 5799, 4737, 5230, 7383, 6414, 7233]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Global Deaths per Day',
            fontSize: 20,
            fontColor: 'black'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'black',
                }
            }]
        }
    }
});