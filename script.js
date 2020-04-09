const number = document.querySelectorAll('.number');
const total_cases_graphs = document.querySelector('#total_cases_graphs').getContext('2d');
const daily_new_graphs = document.querySelector('#daily_new_graphs').getContext('2d');
const active_graphs = document.querySelector('#active_graphs').getContext('2d');
const total_deaths_graphs = document.querySelector('#total_deaths_graphs').getContext('2d');
const daily_deaths_graphs = document.querySelector('#daily_deaths_graphs').getContext('2d');

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
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07'],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'tomato',
            pointBorderWidth: 2,
            pointBackgroundColor: 'tomato',
            pointBorderColor: 'tomato',
            lineTension: 0.2,
            data: [1, 1, 2, 3, 7, 7, 13, 16, 24, 38, 61, 64, 85, 116, 150, 202, 240, 274, 402, 554, 709, 927, 1170, 1187, 1280, 1326, 1353, 1380, 1462, 1505, 1585, 1655, 1686, 1749]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Total Cases'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        }
    }
});

const daily_new_graphsChart = new Chart(daily_new_graphs, {
    type: 'bar',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07'],
        datasets: [{
            backgroundColor: 'tomato',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [1, 0, 1, 1, 4, 0, 6, 3, 8, 14, 23, 3, 21, 31, 34, 52, 38, 34, 128, 152, 155, 218, 243, 17, 93, 46, 27, 27, 82, 43, 80, 70, 31, 63]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Cases per Day'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        }
    }
});

const active_graphsChart = new Chart(active_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07'],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'tomato',
            pointBorderWidth: 2,
            pointBackgroundColor: 'tomato',
            pointBorderColor: 'tomato',
            lineTension: 0.2,
            data: [1, 1, 2, 3, 7, 7, 13, 16, 24, 38, 61, 64, 85, 116, 150, 202, 238, 272, 398, 550, 697, 915, 1138, 1155, 1247, 1292, 1317, 1335, 1407, 1401, 1481, 1549, 1579, 1641]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Active Cases (Currently Infected People)'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        }
    }
});

const total_deaths_graphsChart = new Chart(total_deaths_graphs, {
    type: 'line',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07'],
        datasets: [{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'tomato',
            pointBorderWidth: 2,
            pointBackgroundColor: 'tomato',
            pointBorderColor: 'tomato',
            lineTension: 0.2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 5, 5, 5, 9, 9, 11, 12, 13]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Total Cases'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        }
    }
});

const daily_deaths_graphsChart = new Chart(daily_deaths_graphs, {
    type: 'bar',
    data: {
        labels: ['Mar 05', '', '', 'Mar 08', '', '', 'Mar 11', '', '', 'Mar 14', '', '', 'Mar 17', '', '', 'Mar 20', '', '', 'Mar 23', '', '', 'Mar 26', '', '', 'Mar 29', '', '', 'Apr 01', '', '', 'Apr 04', '', '', 'Apr 07'],
        datasets: [{
            backgroundColor: 'tomato',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [1, 0, 1, 1, 4, 0, 6, 3, 8, 14, 23, 3, 21, 31, 34, 52, 38, 34, 128, 152, 155, 218, 243, 17, 93, 46, 27, 27, 82, 43, 80, 70, 31, 63]
        }]
    },
    options: {
        legend: {
            display: false
        }, 
        title: {
            display: true,
            text: 'Cases per Day'
        },
        tooltips: {
            titleFontSize: 0,
            titleMarginBottom: 0
        }
    }
});