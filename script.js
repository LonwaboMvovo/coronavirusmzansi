const number = document.querySelectorAll('.number');
const total_cases_graphs = document.querySelector('#total_cases_graphs').getContext('2d');
const daily_new_graphs = document.querySelector('#daily_new_graphs').getContext('2d');
const active_graphs = document.querySelector('#active_graphs').getContext('2d');
const total_deaths_graphs = document.querySelector('#total_deaths_graphs').getContext('2d');
const daily_deaths_graphs = document.querySelector('#daily_deaths_graphs').getContext('2d');
const selected_province_info = document.querySelector('#selected_province_info');
const cases_info = document.querySelector('#cases_info');
const deaths_info = document.querySelector('#deaths_info');
const provinces = document.getElementsByTagName('path');
const ZA_EC = document.querySelector('#ZA-EC');
const ZA_FS = document.querySelector('#ZA-FS');
const ZA_GT = document.querySelector('#ZA-GT');
const ZA_LP = document.querySelector('#ZA-LP');
const ZA_MP = document.querySelector('#ZA-MP');
const ZA_NC = document.querySelector('#ZA-NC');
const ZA_NL = document.querySelector('#ZA-NL');
const ZA_NW = document.querySelector('#ZA-NW');
const ZA_WC = document.querySelector('#ZA-WC');

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

const total_cases_graphsChart = new Chart(total_cases_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'black',
            pointBorderWidth: 2,
            pointBackgroundColor: 'black',
            pointBorderColor: 'black',
            lineTension: 0.2,
            data: [1, 1, 2, 3, 7, 7, 13, 16, 24, 38, 61, 64, 85, 116, 150, 202, 240, 274, 402, 554, 709, 927, 1170, 1187, 1280, 1326, 1353, 1380, 1462, 1505, 1585, 1655, 1686, 1749, 1845]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Total Cases',
            fontSize: 40,
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
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', ''],
        datasets: [{
            backgroundColor: 'black',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [1, 0, 1, 1, 4, 0, 6, 3, 8, 14, 23, 3, 21, 31, 34, 52, 38, 34, 128, 152, 155, 218, 243, 17, 93, 46, 27, 27, 82, 43, 80, 70, 31, 63, 96]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Cases per Day',
            fontSize: 40,
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
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'black',
            pointBorderWidth: 2,
            pointBackgroundColor: 'black',
            pointBorderColor: 'black',
            lineTension: 0.2,
            data: [1, 1, 2, 3, 7, 7, 13, 16, 24, 38, 61, 64, 85, 116, 150, 202, 238, 272, 398, 550, 697, 915, 1138, 1155, 1247, 1292, 1317, 1335, 1407, 1401, 1481, 1549, 1579, 1641, 1732]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Active Cases',
            fontSize: 40,
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
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', ''],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'black',
            pointBorderWidth: 2,
            pointBackgroundColor: 'black',
            pointBorderColor: 'black',
            lineTension: 0.2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 5, 5, 5, 9, 9, 11, 12, 13, 18]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Total Deaths',
            fontSize: 40,
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
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07', ''],
        datasets: [{
            backgroundColor: 'black',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 4, 0, 2, 1, 1, 5]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Deaths per Day',
            fontSize: 40,
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

ZA_EC.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Eastern Cape';
    cases_info.innerHTML = '<u>Cases:</u> 45';
    deaths_info.innerHTML = '<u>Deaths:</u> 0';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_EC.style.fill = '#2d545e';
})

ZA_FS.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Free State';
    cases_info.innerHTML = '<u>Cases:</u> 88';
    deaths_info.innerHTML = '<u>Deaths:</u> 3';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_FS.style.fill = '#2d545e';
})

ZA_GT.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Gauteng';
    cases_info.innerHTML = '<u>Cases:</u> 782';
    deaths_info.innerHTML = '<u>Deaths:</u> 3';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_GT.style.fill = '#2d545e';
})

ZA_LP.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Limpopo';
    cases_info.innerHTML = '<u>Cases:</u> 21';
    deaths_info.innerHTML = '<u>Deaths:</u> 0';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_LP.style.fill = '#2d545e';
})

ZA_MP.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Mpumalanga';
    cases_info.innerHTML = '<u>Cases:</u> 21';
    deaths_info.innerHTML = '<u>Deaths:</u> 0';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_MP.style.fill = '#2d545e';
})

ZA_NC.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Northern Cape';
    cases_info.innerHTML = '<u>Cases:</u> 13';
    deaths_info.innerHTML = '<u>Deaths:</u> 0';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_NC.style.fill = '#2d545e';
})

ZA_NL.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> KwaZulu-Natal';
    cases_info.innerHTML = '<u>Cases:</u> 354';
    deaths_info.innerHTML = '<u>Deaths:</u> 9';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_NL.style.fill = '#2d545e';
})

ZA_NW.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> North West';
    cases_info.innerHTML = '<u>Cases:</u> 15';
    deaths_info.innerHTML = '<u>Deaths:</u> 0';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_NW.style.fill = '#2d545e';
})

ZA_WC.addEventListener('click', () => {
    selected_province_info.innerHTML = '<u>Selected Province:</u> Western Cape';
    cases_info.innerHTML = '<u>Cases:</u> 495';
    deaths_info.innerHTML = '<u>Deaths:</u> 3';
    for (i = 0; i < provinces.length; i++) {
        provinces[i].style.fill = '#D9D9D9';
    }
    ZA_WC.style.fill = '#2d545e';
})