var cityName;
function check() {
  cityName = document.getElementById("cityname").value;
  console.log(cityName);
  checkWeather();
}

async function checkWeather() {
  const apikey = "bee0076bba405cb5cbb0f4b7fc60dbc0";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=;metric&q=${cityName}`;

  const resp = await fetch(apiurl + `&appid=${apikey}`);
  var data = await resp.json();
  if(resp.status == 404)
  {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    document.getElementById("cityname").value = "";
    return ;
  }
  document.querySelector('.error').style.display = 'none';
  document.querySelector(".city").innerHTML = data.name;
  var temp = Math.floor((data.main.temp - 273.15));
  document.querySelector(".temp").innerHTML = `${temp}°C` ;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  var wicon = document.querySelector(".weather-icon");
  switch(data.weather[0].main)
  {
    case "Clear":
      wicon.src = "clear.png";
      break;
    case "Clouds":
      wicon.src = "clouds.png";
      break;
    case "Rain":
      wicon.src = "rain.png";
      break;
    case "Drizzle":
      wicon.src = "drzzle.png";
      break;
    case "Mist":
      wicon.src = "mist.png";
      break;
    case "Snow":
      wicon.src = "snow.png";
      break;
    case "Wind":
      wicon.src = "wind.png";
      break;
    default :
      wicon.src = "clear.png";
   
      
  }
  
  
  var block = document.querySelector('.weather');
  block.style = "display:block"
  document.getElementById("cityname").value = "";
  
}
  