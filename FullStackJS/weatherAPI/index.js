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
    const weatherinfo = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/udupi/?key=P32GYF38FG38FG5ME7KCXLFYK");
    const data = await weatherinfo.json();
    container.innerHTML=JSON.stringify(data);
    console.log(data);
}