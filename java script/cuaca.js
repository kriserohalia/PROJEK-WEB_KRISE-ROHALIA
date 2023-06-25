const searchButton = document.querySelector('#button2');
const inputKeyword = document.querySelector('.input-keyword');

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputKeyword.value + "&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            const elemenOutput = document.querySelector('.result')

            const buff = document.createElement('div');
            buff.className = "warna";

            const d1 = document.createElement('h1');
            d1.textContent = response.name + ',' + response.sys.country;
            buff.appendChild(d1);
            elemenOutput.appendChild(buff);

            const d2 = document.createElement('p');
            d2.textContent = response.main.temp + '°С' + ' ' + response.weather[0].description;
            buff.appendChild(d2);
            elemenOutput.appendChild(buff);

            const d3 = document.createElement('p');
            d3.textContent = 'Temperature from' + response.main.temp_min + '°С' + ' ' + 'to' + ' ' + response.main.temp_max + '°С';
            buff.appendChild(d3);
            elemenOutput.appendChild(buff);


            const d4 = document.createElement('p');
            d4.textContent = 'Wind Speed : ' + response.wind.speed + 'm/s';
            buff.appendChild(d4);
            elemenOutput.appendChild(buff);

            const d5 = document.createElement('p');
            d5.textContent = 'Clouds : ' + response.clouds.all + '%';
            buff.appendChild(d5);
            elemenOutput.appendChild(buff);

            const d6 = document.createElement('p');
            d6.textContent = 'Geo Coordinates : ' + response.coord.lat + ',' + response.coord.lon;
            buff.appendChild(d6);
            elemenOutput.appendChild(buff);

        })
    inputKeyword.value = null;

})