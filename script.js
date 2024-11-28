async function getData(city) {
    let weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=PPNU9JCK2J63WJATWK8989VW4`)
    .then(r => r.json());

    const condition0 = weather.days[0].conditions;
    const condition1 = weather.days[1].conditions;
    const condition2 = weather.days[2].conditions;
    const condition3 = weather.days[3].conditions;
    const condition4 = weather.days[4].conditions;
    const condition5 = weather.days[5].conditions;


    const temp0 = ((Number(weather.days[0].temp)-32)*5/9).toFixed(1);
    const temp1 = ((Number(weather.days[1].temp)-32)*5/9).toFixed(1);
    const temp2 = ((Number(weather.days[2].temp)-32)*5/9).toFixed(1);
    const temp3 = ((Number(weather.days[3].temp)-32)*5/9).toFixed(1);
    const temp4 = ((Number(weather.days[4].temp)-32)*5/9).toFixed(1);
    const temp5 = ((Number(weather.days[5].temp)-32)*5/9).toFixed(1);

    const humidity = weather.days[0].humidity + ' %';
    const speed = weather.days[0].windspeed + " km/h";
    const faName = await fetch('./cities.json').then((res) => res.json()).then((data) => data[city]);
    document.getElementById('future-days-title').innerHTML = faName;
    
    const today = getFaDate();
    const date_string = faName + ' ' + (today['day'].startsWith('۰') ? today['day'][1] : today['day']) + ' ' + today['monthTitle'];
    const day = today['dayWeek'];

    document.getElementById('temp').innerHTML = temp0 + '°';
    document.getElementById('city-day').innerHTML = date_string;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('wind-speed').innerHTML = speed;

    const img0 = document.getElementById('condition');
    const img1 = document.getElementById('condition1');
    const img2 = document.getElementById('condition2');
    const img3 = document.getElementById('condition3');
    const img4 = document.getElementById('condition4');
    const img5 = document.getElementById('condition5');

    document.getElementById('temp1').innerHTML = temp1 + '°';
    document.getElementById('temp2').innerHTML = temp2 + '°';
    document.getElementById('temp3').innerHTML = temp3 + '°';
    document.getElementById('temp4').innerHTML = temp4 + '°';
    document.getElementById('temp5').innerHTML = temp5 + '°';

    const hours = new Date(). getHours()
    const isDayTime = hours > 6 && hours < 20;

   

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


    if (day=="شنبه") {
        document.getElementById('day1').innerHTML = "یک‌شنبه";
        document.getElementById('day2').innerHTML = "دوشنبه";
        document.getElementById('day3').innerHTML = "سه‌شنبه";
        document.getElementById('day4').innerHTML = "چهارشنبه";
        document.getElementById('day5').innerHTML = "پنج‌شنبه";
    }
    if (day=="یکشنبه") {
        document.getElementById('day1').innerHTML = "دوشنبه";
        document.getElementById('day2').innerHTML = "سه‌شنبه";
        document.getElementById('day3').innerHTML = "چهارشنبه";
        document.getElementById('day4').innerHTML = "پنج‌شنبه";
        document.getElementById('day5').innerHTML = "جمعه";
    }
    if (day=="دوشنبه") {
        document.getElementById('day1').innerHTML = "سه‌شنبه";
        document.getElementById('day2').innerHTML = "چهارشنبه";
        document.getElementById('day3').innerHTML = "پنج‌شنبه";
        document.getElementById('day4').innerHTML = "جمعه";
        document.getElementById('day5').innerHTML = "شنبه";
    }
    if (day=="سه‌شنبه") {
        document.getElementById('day1').innerHTML = "چهارشنبه";
        document.getElementById('day2').innerHTML = "پنج‌شنبه";
        document.getElementById('day3').innerHTML = "جمعه";
        document.getElementById('day4').innerHTML = "شنبه";
        document.getElementById('day5').innerHTML = "یک‌شنبه";
    }
    if (day=="چهارشنبه") {
        document.getElementById('day1').innerHTML = "پنج‌شنبه";
        document.getElementById('day2').innerHTML = "جمعه";
        document.getElementById('day3').innerHTML = "شنبه";
        document.getElementById('day4').innerHTML = "دوشنبه";
        document.getElementById('day5').innerHTML = "سه‌شنبه";
    }
    if (day=="پنجشنبه") {
        document.getElementById('day1').innerHTML = "جمعه";
        document.getElementById('day2').innerHTML = "شنبه";
        document.getElementById('day3').innerHTML = "یک‌شنبه";
        document.getElementById('day4').innerHTML = "دوشنبه";
        document.getElementById('day5').innerHTML = "سه‌شنبه";
    }
    if (day=="جمعه") {
        document.getElementById('day1').innerHTML = "شنبه";
        document.getElementById('day2').innerHTML = "یک‌شنبه";
        document.getElementById('day3').innerHTML = "دوشنبه";
        document.getElementById('day4').innerHTML = "سه‌شنبه";
        document.getElementById('day5').innerHTML = "چهارشنبه";
    }
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





function fetchJSONData() {
    fetch("./cities.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            var list = document.getElementById('list');
            let i = 0;
            while (i < 5000) {
                if (Object.keys(data)[i]==undefined) {break};
                const btn = document.createElement('button');
                btn.className = "hidden btn w-full flex justify-between border-b-[1px] border-card-border py-2 px-2 hover:bg-header-footer-border bg-[hsla(0, 0%, 100%, 1)]";
                const span1 = document.createElement('span');
                span1.className = 'text-left';
                span1.innerHTML = Object.keys(data)[i];
                const span2 = document.createElement('span');
                span2.innerHTML = data[Object.keys(data)[i]];
                span2.className = 'text-right';
                btn.appendChild(span1);
                btn.appendChild(span2);
                list.appendChild(btn);
                btn.setAttribute('id', span1.innerHTML);
                i += 1;
            }

            const btns = document.getElementsByClassName('btn');
[...btns].forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        getData(element.firstChild.innerHTML);
    }) 
});
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
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
                if (element.includes(s) || data[element].includes(s)) {
                    document.getElementById(element).classList.remove('hidden');
                }
                if (!element.includes(s) && !data[element].includes(s)) {
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
});

fetchJSONData();

/* const getCityFa = async (city) => {
    const query = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=933cd2a4a5657b4a01c3d56783cb1e30`;
    const response = await fetch(query);
    const data = await response.json();
    if (data!=undefined && data[0]!=undefined && data[0]['local_names']!=undefined) {return data[0]['local_names']['fa']};
}
async function fetchJSONData() {
    fetch("./cities.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(async (data) => {
            
            for (let i = 111081; i < cities.length; i++) {
                const name = cities[i];
                const fa = await getCityFa(name);
                if (fa != undefined) console.log('"' + name + '":' + ' "' + fa + '"'); 
            } 
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
} */




