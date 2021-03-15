

/*let weather = fetch("http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");

// console.log(weather);
weather.then((results)=>{
    let finalRes = results.json();
    // console.log(finalRes);
    finalRes.then((res)=>{
        console.log(res.main.temp)
    })
})

*/
async function readWeather(){
    var city = document.getElementById("city").value;
    console.log(city);
    let x = await fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");
    let y = await x.json();
    return y;
}

async function getWeather(){
    let y = await readWeather();
    console.log(y);
    var dates =[];
    var temp=[];
    for(x = 2; x < y.list.length; x+=8){
        //console.log(y.list[x].main.temp);
        temp.push(y.list[x].main.temp)
        dates.push(y.list[x].dt_txt.split(" ")[0]);
        //console.log(arr);
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: '5 day forecast for '+document.getElementById("city").value,
            data: temp,
            
        }]
    }
});
}
/*async function readWeather(){
    var city = document.getElementById("city").value;
    console.log(city);
    let x = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");
    let y = await x.json();
    return y;
}

async function getWeather(){
    let response = await readWeather();
    console.log(response)
    if(response.cod=="404")
    {
        console.log("<center> ENTER VALID CITY NAME</center>")
    }
    else
        console.log("<center> "+response.name+"</center>");

   
}*/

// readWeather()