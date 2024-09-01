const input=document.querySelector('input'); 
const container = document.querySelector('.container');
input.addEventListener("keyup", function(e) {
    if(e.key==="Enter") {
        const location = input.value;
        console.log(location);
        getData(location); 
    }
});

async function getData(location) {
    const weatherinfo = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "/?key=P32GYF38FG38FG5ME7KCXLFYK");
    if(weatherinfo.status === 200) {
        const data = await weatherinfo.json();
        arrangeData(data);    
        console.log(data);
    } else {
        console.log("no data available");
    }
}

function arrangeData(data) {
    document.querySelector("#address").innerHTML=data.resolvedAddress;
    document.querySelector('#currWeather').innerHTML=data.currentConditions.temp + "°F";
    document.querySelector('#conditions').innerHTML=data.currentConditions.conditions;
    const forecast = document.querySelector('.five_day_forecast');
    forecast.innerHTML="";
    for(var i=1; i<=5; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'day' + i);
        
        const date = document.createElement('div');
        date.setAttribute('id', 'date');
        date.innerHTML=data.days[i-1].datetime;
        const temp = document.createElement('div');
        temp.setAttribute('id', 'temp');
        temp.innerHTML=data.days[i-1].temp;
        const cond = document.createElement('div');
        cond.setAttribute('id', 'cond');
        cond.innerHTML=data.days[i-1].conditions;

        div.appendChild(date);
        div.appendChild(temp);
        div.appendChild(cond);
        forecast.appendChild(div);
    }
}