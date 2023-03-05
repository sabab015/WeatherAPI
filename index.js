fetch("https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=898c39b8bffa2ef724afffddc26a366b&units=metric")
    .then(res => res.json())
    .then(data => {

        //checking DHAKA weather
        console.log(data);
        document.getElementById("city-name").innerText = data.name;

        const temp = data.main;
        const tempData = temp.temp;
        document.getElementById("temp").innerHTML = tempData `<p>&deg;C</p>`;

        const weather_desc = data.weather[0];
        const details = weather_desc.main;
        document.getElementById("lead").innerText = details;
    })
