const btn = document.getElementById('btn');

async function getData(city) {
    let weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=PPNU9JCK2J63WJATWK8989VW4`)
    .then(r => r.json());

    console.log(weather.days[0].conditions);
    console.log(weather.days[0].humidity);
    console.log(weather.days[0].windspeed);
    console.log(weather.days[0].temp);
    

}



btn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('input').value;
    console.log(city);
    
    getData(city);
    
});