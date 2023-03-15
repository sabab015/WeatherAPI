document.getElementById("load-city").addEventListener("click", function () {
    const searchCity = document.getElementById("search-city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=898c39b8bffa2ef724afffddc26a366b&units=metric`)
        .then(res => res.json())
        .then(data => {

            document.getElementById("city-name").innerText = data.name;

            const temp = data.main;
            const tempData = temp.temp;
            document.getElementById("temp").innerText = tempData;

            const weather_desc = data.weather[0];
            const details = weather_desc.main;
            document.getElementById("lead").innerText = details;
        })
})
