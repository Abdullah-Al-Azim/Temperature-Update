let inputs = document.getElementById("input");
let cityName = document.getElementById("city-name");
const checkWeather = () => {
    let inputValue = inputs.value;
    cityName.innerText = inputValue;
    inputs.value = " ";

    if (inputValue == ""){
        alert("Write A City Name")
        location.reload();
    }else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=3476cf75f10839af58ed11833746005d`
        fetch(url)
        .then(res => res.json())
        .then(data => finalResult(data));
    }
}

const finalResult = (result) => {
    const temperature = document.getElementById("temp");
    let showWeather = document.getElementById("weather");
    if (result.message == "city not found" ){
        alert("Write A Correct City Name");
        location.reload();
    }else{
        cityName.style.display = "block"
        let tempConvert = (result.main.temp);
        // console.log(hello);
        let convert = tempConvert - (273.15);
        let finalConvert = Math.round(convert);
        temperature.innerText = finalConvert;
        let weatherConvert = (result.weather[0].main);
        showWeather.innerText = weatherConvert;
    }
   
}