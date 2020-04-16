const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];

const global_stats_title = document.querySelector('#global_stats_title');

const last_updated_desktop = document.querySelector('#last_updated_desktop');
const last_updated_mobile = document.querySelector('#last_updated_mobile');

const search = document.querySelector('#search');
const searchCountry = document.querySelector('#searchCountry');
const countryList = document.querySelector('#countryList');

const number = document.querySelectorAll('.number');
const global_number = document.querySelectorAll('.global_number');

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
let daily_cases_graphsChartLabels = [];
let daily_cases_graphsChartArray = [];
let total_recovered_graphsChartLabels = [];
let total_recovered_graphsChartArray = [];
let total_deaths_graphsChartLabels = [];
let total_deaths_graphsChartArray = [];
let daily_deaths_graphsChartLabels = [];
let daily_deaths_graphsChartArray = [];
let total_active_graphsChartLabels = [];
let total_active_graphsChartArray = [];

const all_graphs = document.querySelector('#all_graphs');

const total_cases_graphs = document.querySelector('#total_cases_graphs').getContext('2d');
const daily_cases_graphs = document.querySelector('#daily_cases_graphs').getContext('2d');
const total_recovered_graphs = document.querySelector('#total_recovered_graphs').getContext('2d');
const total_deaths_graphs = document.querySelector('#total_deaths_graphs').getContext('2d');
const daily_deaths_graphs = document.querySelector('#daily_deaths_graphs').getContext('2d');
const total_active_graphs = document.querySelector('#total_active_graphs').getContext('2d');

const  fetchCoronaSaSummaryURL= 'https://api.covid19api.com/live/country/south-africa';
async function fetchCoronaSaSummary() {
    try {
        const response = await fetch(fetchCoronaSaSummaryURL);
        const data = await response.json();
        latest_data = data[data.length - 1]
        let date_updated = new Date(latest_data.Date);
        last_updated_desktop.textContent = `Last Updated: ${date_updated.getDate()}/${date_updated.getMonth() + 1}/${date_updated.getFullYear()}`;
        last_updated_mobile.textContent = `Last Updated: ${date_updated.getDate()}/${date_updated.getMonth() + 1}/${date_updated.getFullYear()}`;
        number[0].innerHTML = '90515';
        number[1].innerHTML = latest_data.Confirmed;
        number[2].innerHTML = latest_data.Active;
        number[3].innerHTML = latest_data.Recovered;
        number[4].innerHTML = '10';
        number[5].innerHTML = latest_data.Deaths;
    } catch (err) {
        console.log(err);
        number[0].innerHTML = '95060';
        number[1].innerHTML = '2605';
        number[2].innerHTML = '1654';
        number[3].innerHTML = '903';
        number[4].innerHTML = '7';
        number[5].innerHTML = '48';
        last_updated_desktop.textContent = 'Last Updated: 16/04/2020';
        last_updated_mobile.textContent = 'Last Updated: 16/04/2020';
    }
}

const fetchGlobalCoronaSaSummaryURL = 'https://api.covid19api.com/world/total';
async function fetchGlobalCoronaSaSummary() {
    try {
        const response = await fetch(fetchGlobalCoronaSaSummaryURL);
        const data = await response.json();
        global_number[0].innerHTML = data.TotalConfirmed;
        global_number[1].innerHTML = data.TotalRecovered;
        global_number[2].innerHTML = data.TotalDeaths;
    } catch (err) {
        console.log(err);
        global_number[0].innerHTML = '1826633';
        global_number[1].innerHTML = '447732';
        global_number[2].innerHTML = '108114';
    }
}

async function showFetchedCorona() {
    await fetchCoronaSaSummary();
    await fetchGlobalCoronaSaSummary();
}
showFetchedCorona();

ZAF1188.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Northern Cape';
    province_breakdown.innerHTML = 'Cases: 16<br>Deaths: 0<br>Recoveries: 6';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1188.style.fill = '#2d545e';
})

ZAF1189.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Western Cape';
    province_breakdown.innerHTML = 'Cases: 675<br>Deaths: 13<br>Recoveries: 205';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1189.style.fill = '#2d545e'
})

ZAF1201.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: North West';
    province_breakdown.innerHTML = 'Cases: 24<br>Deaths: 0<br>Recoveries: 10';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1201.style.fill = '#2d545e'
})

ZAF1206.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Free State';
    province_breakdown.innerHTML = 'Cases: 98<br>Deaths: 4<br>Recoveries: 71';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1206.style.fill = '#2d545e'
})

ZAF1208.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Gauteng';
    province_breakdown.innerHTML = 'Cases: 969<br>Deaths: 6<br>Recoveries: 479';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1208.style.fill = '#2d545e'
})

ZAF1209.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Mpumalanga';
    province_breakdown.innerHTML = 'Cases: 22<br>Deaths: 0<br>Recoveries: 9';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1209.style.fill = '#2d545e'
})

ZAF1210.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Limpopo';
    province_breakdown.innerHTML = 'Cases: 26<br>Deaths: 1<br>Recoveries: 18';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1210.style.fill = '#2d545e'
})

ZAF1216.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: KwaZulu Natal';
    province_breakdown.innerHTML = 'Cases: 539<br>Deaths: 20<br>Recoveries: 96';
    for (i = 0; i < 9; i++) {
        provinces[i].style.fill = 'black';
    }
    ZAF1216.style.fill = '#2d545e'
})

ZAF1926.addEventListener('click', () => {
    selected_province_info.textContent = 'Selected Province: Eastern Cape';
    province_breakdown.innerHTML = 'Cases: 220<br>Deaths: 4<br>Recoveries: 9';
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
        const date = data.map(({ Date }) => Date.slice(0, -10).slice(5));
        for (x = 0; x < date.length; x++) {
            let a = date[x].slice(0, 2);
            let b = date[x].slice(-2); 
            date[x] = `${b}/${a}`
        }
        for (i = 1; i < date.length; i++) {
            if (i % 3 !== 0) {
                date[i] = '';
            }
        }
        total_cases_graphsChartLabels = date;
        total_deaths_graphsChartLabels = date;
        total_recovered_graphsChartLabels = date;
        total_active_graphsChartLabels = date;
        daily_cases_graphsChartLabels = date;
        daily_deaths_graphsChartLabels = date;
        const cases = data.map(({ Confirmed }) => Confirmed);
        total_cases_graphsChartArray = cases;
        daily_cases_graphsChartArray[0] = JSON.parse(JSON.stringify(cases[0]));
        const recovered = data.map(({ Recovered }) => Recovered);
        total_recovered_graphsChartArray = recovered;
        const deaths = data.map(({ Deaths }) => Deaths);
        total_deaths_graphsChartArray = deaths;
        daily_deaths_graphsChartArray[0] = JSON.parse(JSON.stringify(deaths[0]));
        total_active_graphsChartArray = JSON.parse(JSON.stringify(cases));
        for (j = 0; j < cases.length; j++) {
            if (j !== cases.length - 1) {
                daily_cases_graphsChartArray[j+1] = cases[j + 1] - cases[j];
            }
            if (j !== deaths.length - 1) {
                daily_deaths_graphsChartArray[j+1] = deaths[j + 1] - deaths[j];
            }
            total_active_graphsChartArray[j] -= total_recovered_graphsChartArray[j];
            total_active_graphsChartArray[j] -= total_deaths_graphsChartArray[j];
        }
        if (cases[cases.length - 1] === cases[cases.length - 2]) {
            date.pop();
            total_cases_graphsChartArray.pop();
            daily_cases_graphsChartArray.pop();
            total_recovered_graphsChartArray.pop();
            total_deaths_graphsChartArray.pop();
            daily_deaths_graphsChartArray.pop();
            total_active_graphsChartArray.pop();
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

    const daily_cases_graphsChart = new Chart(daily_cases_graphs, {
        type: 'bar',
        data: {
            labels: daily_cases_graphsChartLabels,
            datasets: [{
                backgroundColor: '#2d545e',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: daily_cases_graphsChartArray
            }]
        },
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: true,
                text: 'SA Cases Per Day',
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

    const daily_deaths_graphsChart = new Chart(daily_deaths_graphs, {
        type: 'bar',
        data: {
            labels: daily_deaths_graphsChartLabels,
            datasets: [{
                backgroundColor: '#2d545e',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: daily_deaths_graphsChartArray
            }]
        },
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: true,
                text: 'SA Deaths Per Day',
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
                text: 'SA Active Cases',
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

let countryIndex = 1;
let countryInfo = [];

const  fetchCountriesURL = 'https://api.covid19api.com/summary';

async function fetchCountriesStats() {
    try {
        const response = await fetch(fetchCountriesURL);
        const data = await response.json();
        countryInfo = data.Countries;
    } catch (err) {
        console.log(err);
    }
    fetchCountries();
}

function showThisCountry() {
    let myCountryId = this.id;
    showCountries(myCountryId);
    countryList.style.display = 'none';
    search.style.right = '';
}

const addCountryNames = () => {
    for (int = 0; int < countryInfo.length; int++) {
      countryNameAdded = countryInfo[int].Country;
      li = document.createElement('li');
      li.appendChild(document.createTextNode(countryNameAdded));
      countryList.appendChild(li);
      li.id = int;
      li.addEventListener('click', showThisCountry);
    }
  }

const fetchCountries = () => {
      searchCountry.style.display = 'block';
      addCountryNames();
}
    

const showCountryList = () => {
    let filter = searchCountry.value.toUpperCase();
    let countries = countryList.getElementsByTagName('li');
    let searchValue;
    for (k = 0; k < countries.length; k++) {
      searchValue = countries[k].textContent;
      if (searchValue.toUpperCase().indexOf(filter) > -1) {
        countries[k].style.display = 'block';
      } else {
        countries[k].style.display = 'none';
      }
    }
}
  
searchCountry.addEventListener('focus', () => {
    countryList.style.display = 'block';
    if (body.clientWidth < 500) {
        search.scrollIntoView();
        search.style.right = '10px';
    }
})
  
main.addEventListener('click', () => {
countryList.style.display = 'none';
search.style.right = '';
})
  
searchCountry.addEventListener('keyup', () => {
showCountryList();
})

function showCountries(n) {
    global_stats_title.innerHTML = `<u>${countryInfo[n].Country}</u>`;
    global_number[0].innerHTML = countryInfo[n].TotalConfirmed;
    global_number[1].innerHTML = countryInfo[n].TotalRecovered;
    global_number[2].innerHTML = countryInfo[n].TotalDeaths;
}

fetchCountriesStats()