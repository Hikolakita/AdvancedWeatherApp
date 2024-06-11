function getweather() {
    var city = document.getElementById('input').value;
  
    var url = "https://api.weatherapi.com/v1/current.json?key=088aa9da2a9642fab52104935230805&q=" + city + "&aqi=no";
    
    document.getElementById('city').innerHTML = city;
    fetch(url) 
      .then(response => response.json())
      .then(data => {
        var weather = data.current.condition.text;
        var temperature = data.current.temp_c;
        var wind = data.current.wind_kph;
        var humidity = data.current.humidity;
        var feeling = data.current.feelslike_c;
        var wind_dir = data.current.wind_dir;
        var is_day = data.current.is_day;
        var src = data.current.condition.icon;
        
        document.getElementById('weather').innerHTML = weather;
        document.getElementById('feeling').innerHTML = 'Feeling : ' + feeling + '°C';
        document.getElementById('temperature').innerHTML = temperature + '°C';
        document.getElementById('wind').innerHTML = wind + 'km/h';
        document.getElementById('humidity').innerHTML = humidity + '%';
        document.getElementById('windDir').innerHTML = wind_dir;
        document.getElementById('weatherIcon').src = "https:" +src;
        console.log(src)

        if(feeling > 20) {
          document.getElementById('homeText').innerHTML = 'You <b>should</b> go out.';
          document.getElementById('homeEmoji').innerHTML = '🌳';
        } else{
          document.getElementById('homeText').innerHTML = 'You <b>shouldn\'t</b> go out.';
          document.getElementById('homeEmoji').innerHTML = '🏠';
        }

        if (wind_dir == 'N') {
          document.getElementById('windDir').innerHTML = 'North';
        }
        if (wind_dir == 'S') {
          document.getElementById('windDir').innerHTML = 'South';
        }
        if (wind_dir == 'E') {
          document.getElementById('windDir').innerHTML = 'East';
        }
        if (wind_dir == 'W') {
          document.getElementById('windDir').innerHTML = 'West';
        }
        if (is_day == 1) {
          document.getElementById('isDay').innerHTML = 'Day';
        } else {
          document.getElementById('isDay').innerHTML = 'Night';
        }


      })
  }