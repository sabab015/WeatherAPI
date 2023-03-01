fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=898c39b8bffa2ef724afffddc26a366b")
    .then(res => res.json())
    .then(data => {
        // const user = data.results[0];
        // const name = user.name;
        // const userName = `${name.title} ${name.first} ${name.last}`;
        // document.getElementById("city-name").innerText = userName;

        const city = data.city;
        const name = city.name
        // console.log(name);
        document.getElementById("city-name").innerText = name;
    })
