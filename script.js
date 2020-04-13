const last_updated_desktop = document.querySelector('#last_updated_desktop');
const last_updated_mobile = document.querySelector('#last_updated_mobile');

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

const sa_map_svg = document.querySelector('#sa_map_svg');

const graph_msg = document.querySelector('#graph_msg');

let total_cases_graphsChartLabels = [];
let total_cases_graphsChartArray = [];
let total_active_graphsChartLabels = [];
let total_active_graphsChartArray = [];
let total_recovered_graphsChartLabels = [];
let total_recovered_graphsChartArray = [];
let total_deaths_graphsChartLabels = [];
let total_deaths_graphsChartArray = [];

const all_graphs = document.querySelector('#all_graphs');

const total_cases_graphs = document.querySelector('#total_cases_graphs').getContext('2d');
const total_active_graphs = document.querySelector('#total_active_graphs').getContext('2d');
const total_recovered_graphs = document.querySelector('#total_recovered_graphs').getContext('2d');
const total_deaths_graphs = document.querySelector('#total_deaths_graphs').getContext('2d');

const  fetchCoronaSaSummaryURL= 'https://api.covid19api.com/live/country/south-africa';
async function fetchCoronaSaSummary() {
    try {
        const response = await fetch(fetchCoronaSaSummaryURL);
        const data = await response.json();
        let date_updated = new Date(data[0].Date);
        last_updated_desktop.textContent = `Last Updated: ${date_updated.getDate()}/${date_updated.getMonth() + 1}/${date_updated.getFullYear()}`;
        last_updated_mobile.textContent = `Last Updated: ${date_updated.getDate()}/${date_updated.getMonth() + 1}/${date_updated.getFullYear()}`;
        number[0].innerHTML = '83663';
        number[1].innerHTML = data[0].Confirmed;
        number[2].innerHTML = data[0].Active;
        number[3].innerHTML = data[0].Recovered;
        number[4].innerHTML = '7';
        number[5].innerHTML = data[0].Deaths;
    } catch (err) {
        console.log(err);
        number[0].innerHTML = '83663';
        number[1].innerHTML = '2272';
        number[2].innerHTML = '1738';
        number[3].innerHTML = '410';
        number[4].innerHTML = '7';
        number[5].innerHTML = '27';
        last_updated_desktop.textContent = 'Last Updated: 13/04/2020';
        last_updated_mobile.textContent = 'Last Updated: 13/04/2020';
    }
}

const fetchTestsAndCriticalURL = 'https://corona.lmao.ninja/v2/countries/south%20africa';
async function fetchTestsAndCritical() {
    try {
        const response = await fetch(fetchTestsAndCriticalURL);
        const data = await response.json();
        number[0].innerHTML = data.tests;
        number[4].innerHTML = data.critical;
        for (k = 0; k < 5; k++) {
            number[k].display = 'inline';
        }
    } catch (err) {
        console.log(err);
    }
}

async function showFetchedCorona() {
    await fetchCoronaSaSummary();
    await fetchTestsAndCritical();
}
showFetchedCorona();

ZAF1188.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Northern Cape';
    province_breakdown.innerHTML = 'Cases: 16<br>Deaths: 0<br>Recoveries: 0';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1188.style.fill = '#2d545e';
})

ZAF1189.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Western Cape';
    province_breakdown.innerHTML = 'Cases: 587<br>Deaths: 7<br>Recoveries: 152';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1189.style.fill = '#2d545e'
})

ZAF1201.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: North West';
    province_breakdown.innerHTML = 'Cases: 19<br>Deaths: 0<br>Recoveries: 3';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1201.style.fill = '#2d545e'
})

ZAF1206.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Free State';
    province_breakdown.innerHTML = 'Cases: 96<br>Deaths: 3<br>Recoveries: 61';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1206.style.fill = '#2d545e'
})

ZAF1208.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Gauteng';
    province_breakdown.innerHTML = 'Cases: 865<br>Deaths: 3<br>Recoveries: 157';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1208.style.fill = '#2d545e'
})

ZAF1209.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Mpumalanga';
    province_breakdown.innerHTML = 'Cases: 21<br>Deaths: 0<br>Recoveries: 6';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1209.style.fill = '#2d545e'
})

ZAF1210.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Limpopo';
    province_breakdown.innerHTML = 'Cases: 23<br>Deaths: 0<br>Recoveries: 13';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1210.style.fill = '#2d545e'
})

ZAF1216.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: KwaZulu Natal';
    province_breakdown.innerHTML = 'Cases: 443<br>Deaths: 12<br>Recoveries: 15';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1216.style.fill = '#2d545e'
})

ZAF1926.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Eastern Cape';
    province_breakdown.innerHTML = 'Cases: 88<br>Deaths: 0<br>Recoveries: 3';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1926.style.fill = '#2d545e'
})

const fetchSAGraphDataURL = 'https://api.covid19api.com/dayone/country/south-africa';
async function fetchSAGraphData() {
    try {
        const response = await fetch(fetchSAGraphDataURL);
        const data = await response.json();
        const date = data.map(({ Date }) => Date.slice(0, -10));
        // for (k = 0; k < date.length; k++) {
        //     date[k]
        // }
        for (i = 1; i < date.length; i++) {
            if (i % 3 !== 0) {
                date[i] = '';
            }
        }
        total_cases_graphsChartLabels = date;
        total_deaths_graphsChartLabels = date;
        total_recovered_graphsChartLabels = date;
        total_active_graphsChartLabels = date;
        const cases = data.map(({ Confirmed }) => Confirmed);
        total_cases_graphsChartArray = cases;
        const recovered = data.map(({ Recovered }) => Recovered);
        total_recovered_graphsChartArray = recovered;
        const deaths = data.map(({ Deaths }) => Deaths);
        total_deaths_graphsChartArray = deaths;
        total_active_graphsChartArray = JSON.parse(JSON.stringify(cases));
        for (j = 0; j < cases.length; j++) {
            total_active_graphsChartArray[j] -= total_recovered_graphsChartArray[j];
            total_active_graphsChartArray[j] -= total_deaths_graphsChartArray[j];
        }
    } catch (err) {
        console.log(err);
        graph_msg.classList.remove('nope');
        graph_msg.innerHTML = '<h4>Unable to load graphs</h4>';
        all_graphs.classList.add('nope');
        sa_map_svg.style.marginBottom = '0px';
    }
}

async function chartGraphs() {
    await fetchSAGraphData();
    const total_cases_graphsChart = new Chart(total_cases_graphs, {
        type: 'line',
        data: {
            labels: total_cases_graphsChartLabels,
            datasets: [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#2d545e',
                borderWidth: 1,
                pointBorderWidth: 0.1,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: '#2d545e',
                lineTension: 0.2,
                data: total_cases_graphsChartArray
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

    const total_recovered_graphsChart = new Chart(total_recovered_graphs, {
        type: 'line',
        data: {
            labels: total_recovered_graphsChartLabels,
            datasets: [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#2d545e',
                borderWidth: 1,
                pointBorderWidth: 0.1,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: '#2d545e',
                lineTension: 0.2,
                data: total_recovered_graphsChartArray
            }]
        },
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: true,
                text: 'SA Total Recovered',
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
            labels: total_deaths_graphsChartLabels,
            datasets: [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#2d545e',
                borderWidth: 1,
                pointBorderWidth: 0.1,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: '#2d545e',
                lineTension: 0.2,
                data: total_deaths_graphsChartArray
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

    const total_active_graphsChart = new Chart(total_active_graphs, {
        type: 'line',
        data: {
            labels: total_active_graphsChartLabels,
            datasets: [{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#2d545e',
                borderWidth: 1,
                pointBorderWidth: 0.1,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: '#2d545e',
                lineTension: 0.2,
                data: total_active_graphsChartArray
            }]
        },
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: true,
                text: 'SA Active Cases (excluding deaths and recoveries)',
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
}
chartGraphs()