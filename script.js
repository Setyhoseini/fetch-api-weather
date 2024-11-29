function farToCelc(temp) {
    return ((Number(temp)-32)*5/9).toFixed(1);
}

function setWeekDays(start) {
    let el1 = document.getElementById('day1');
    let el2 = document.getElementById('day2');
    let el3 = document.getElementById('day3');
    let el4 = document.getElementById('day4');
    let el5 = document.getElementById('day5');

    const weekdays = ["شنبه", "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];

    const startingIndex = weekdays.indexOf(start);

    el1.innerHTML = weekdays[(startingIndex+1)%7];
    el2.innerHTML = weekdays[(startingIndex+2)%7];
    el3.innerHTML = weekdays[(startingIndex+3)%7];
    el4.innerHTML = weekdays[(startingIndex+4)%7];
    el5.innerHTML = weekdays[(startingIndex+5)%7];
}

function setWeatherIcons(weather) {
    const hours = new Date(). getHours()
    const isDayTime = hours > 6 && hours < 20;

    const condition0 = weather.days[0].conditions;
    const condition1 = weather.days[1].conditions;
    const condition2 = weather.days[2].conditions;
    const condition3 = weather.days[3].conditions;
    const condition4 = weather.days[4].conditions;
    const condition5 = weather.days[5].conditions;

    const img0 = document.getElementById('condition');
    const img1 = document.getElementById('condition1');
    const img2 = document.getElementById('condition2');
    const img3 = document.getElementById('condition3');
    const img4 = document.getElementById('condition4');
    const img5 = document.getElementById('condition5');

    for (let i = 0; i < 6; i++) {
        let x;
        let img;
        switch(i) {
            case 0:
                x = condition0;
                img = img0;
                break;
            case 1:
                x = condition1;
                img = img1;
                break;
            case 2:
                x = condition2;
                img = img2;
                break;  
            case 3:
                x = condition3;
                img = img3;
                break;  
            case 4:
                x = condition4;
                img = img4;
                break;   
            case 5:
                x = condition5;
                img = img5;
                break;             
        }

        if (x.includes("Clear ") || x.includes("Clear,") || x=="Clear" || x.includes(" Clear")) {
            if (i==0) {
                isDayTime ? img.setAttribute('src', "assets/images/01_sunny_color.svg") : img.setAttribute('src', "assets/images/02_moon_stars_color.svg");
            }
            else {
                img.setAttribute('src', "assets/images/01_sunny_color.svg")
            }
        }
    
        if (x.includes("Cloud ") || x.includes("Cloud,") || x=="Cloud" || x.includes(" Cloud") || x.includes("Overcast ") || x.includes("Overcast,") || x=="Overcast" || x.includes(" Overcast")) {
            if (i==0) {
                isDayTime ? img.setAttribute('src', "assets/images/03_cloud_color.svg") : img.setAttribute('src', "assets/images/05_moon_cloudy_color.svg");
            }
            else {
                img.setAttribute('src', "assets/images/03_cloud_color.svg");
            }
        }
    
        if (x.includes("Partially cloudy ") || x.includes("Partially cloudy,") || x=="Partially cloudy" || x.includes(" Partially cloudy")) {
            if (i==0) {
                isDayTime ? img.setAttribute('src', "assets/images/35_partly_cloudy_daytime_color.svg") : img.setAttribute('src', "assets/images/36_partly_cloudy_night_color.svg");
            }
            else {
                img.setAttribute('src', "assets/images/35_partly_cloudy_daytime_color.svg");
            }
        }
    
        if (x.includes(" Rain") || x.includes("Rain,") || x=="Rain" || x.includes(" Rain")) {
            img.setAttribute('src', "assets/images/11_heavy_rain_color.svg");
        }
        
        if (x.includes("Snow ") || x.includes("Snow,") || x=="Snow" || x.includes(" Snow")) {
            img.setAttribute('src', "assets/images/18_moderate_snow_color.svg");
        }
    
        if (x.includes("Lightning ") || x.includes("Lightning,") || x=="Lightning" || x.includes(" Lightning")) {
            img.setAttribute('src', "assets/images/07_lightning_color.svg");
        }
    
        if (x.includes("Hail ") || x.includes("Hail,") || x=="Hail" || x.includes(" Hail")) {
            img.setAttribute('src', "assets/images/16_hail_color.svg");
        }
    
        if (x.includes("Thunderstorm ") || x.includes("Thunderstorm,") || x=="Thunderstorm" || x.includes(" Thunderstorm")) {
            img.setAttribute('src', "assets/images/14_thunderstorm_color.svg");
        }
    
        if (x.includes("Mist ") || x.includes("Mist,") || x=="Mist" || x.includes(" Mist")) {
            img.setAttribute('src', "assets/images/08_wet_color.svg");
        }
    
        if (x.includes("Fog ") || x.includes("Fog,") || x=="Fog" || x.includes(" Fog")) {
            img.setAttribute('src', "assets/images/15_fog_color.svg");
        }
    
        if (x.includes("Rainbow")) {
            img.setAttribute('src', "assets/images/40_rainbow_color.svg");
        }
    }
}

function setTemps(weather) {
    const temp0 = farToCelc(weather.days[0].temp);
    const temp1 = farToCelc(weather.days[1].temp);
    const temp2 = farToCelc(weather.days[2].temp);
    const temp3 = farToCelc(weather.days[3].temp);
    const temp4 = farToCelc(weather.days[4].temp);
    const temp5 = farToCelc(weather.days[5].temp);

    document.getElementById('temp').innerHTML = temp0 + '°';
    document.getElementById('temp1').innerHTML = temp1 + '°';
    document.getElementById('temp2').innerHTML = temp2 + '°';
    document.getElementById('temp3').innerHTML = temp3 + '°';
    document.getElementById('temp4').innerHTML = temp4 + '°';
    document.getElementById('temp5').innerHTML = temp5 + '°';
}

async function getData(city) {
    let weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=PPNU9JCK2J63WJATWK8989VW4`)
    .then(r => {
        
        if (!r.ok) {
            alert("اطلاعاتی یافت نشد! :(");
            throw new Error
                (`HTTP error! Status: ${r.status}`);   
        }
        return r.json() });

    const humidity = weather.days[0].humidity + ' %';
    const speed = weather.days[0].windspeed + " km/h";
    const faName = await fetch('./cities.json').then((res) => res.json()).then((data) => data[city]);
    document.getElementById('future-days-title').innerHTML = faName;
    
    const today = getFaDate();
    const date_string = faName + ' ' + (today['day'].startsWith('۰') ? today['day'][1] : today['day']) + ' ' + today['monthTitle'];
    const day = today['dayWeek'];

    setWeekDays(day);
    setWeatherIcons(weather);
    setTemps(weather);

    document.getElementById('city-day').innerHTML = date_string;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('wind-speed').innerHTML = speed;
}

function getFaDate() {
    const today = Date.now();
 
    const todayFa = {
        "day" : getDateFormat(today , {"day" : "2-digit"}),
        "month" : getDateFormat(today , {"month" : "numeric"}),
        "monthTitle" : getDateFormat(today , {"month" : "long"}),
        "year" : getDateFormat(today , {"year" : "numeric"}),
        "dayWeek" : getDateFormat(today , {"weekday" : "long"}),
    }
 
    function getDateFormat(uDate,option){
        let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
        return date;
    } 
 
    return todayFa;
}

function renderList(s) {
    fetch("./cities.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            Object.keys(data).forEach(element => {
                if ((element.toLowerCase()).includes(s.toLowerCase()) || (data[element].toLowerCase()).includes(s.toLowerCase())) {
                    document.getElementById(element).classList.remove('hidden');
                }
                if (!(element.toLowerCase()).includes(s.toLowerCase()) && !(data[element].toLowerCase()).includes(s.toLowerCase())) {
                    document.getElementById(element).classList.add('hidden');
                }
            });
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}


const input = document.getElementById('input');
input.addEventListener('input', () => {
    renderList(input.value);
    document.getElementById('list').classList.remove('hidden');
    
});
input.addEventListener('click', () => {
    document.getElementById('list').classList.remove('hidden');
});

window.onclick = function(event) {
    if (!event.target.matches('#input') && !event.target.matches('#list')) {
      document.getElementById('list').classList.add('hidden');
    }
}

getData('Tehran');

w = new Worker("cities-buttons-creator.js");
w.onmessage = function(event) {
    document.getElementById("list").innerHTML = event.data;
    const btns = document.getElementById('list').childNodes;
    btns.forEach((element) => {console.log(element);
    element.addEventListener('click', (e) => {
    e.preventDefault();
    getData(element.id);
  }) ;
});
};