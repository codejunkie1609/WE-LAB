

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
    let x = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=eefd75753d8a45c5552be93f0b8ea61d&units=metric");
    let y = await x.json();
    return y;
}

async function getWeather(){
    let response = await readWeather();
    if(response.cod==404)
    {
        document.writeln("<center> ENTER CITY NAME CORRECTLY </center>");
    }
    else{
        document.writeln("<center> <h3 style='color: red'> " +  String(response.name).toUpperCase()+"</h3></center>");
        document.writeln("<center> <h3 style='color: orange'> " + String(response.main.temp).toUpperCase()+"</h3></center>");
    }
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