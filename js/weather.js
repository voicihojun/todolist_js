function handleGeoOk(position) {
  //   console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //   console.log(latitude, longitude);
  //openweathermap.org/api

  const API_KEY = "f7fe21bbdb94774cf7eff66143dc833d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  //   console.log(url);
  // fetch = promise 자바스크립트 url을 불렀고,
  // 당장 뭔가 일어나지 않고 시간이 걸린다는 것.
  // 서버가 5분 후에 응답한다고 생각해보자. 그래서 우리는 then 을 사용.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector("#weather_container");

      const city = weatherContainer.querySelector("span:nth-child(1)");
      const weather = weatherContainer.querySelector("span:nth-child(2)");
      const temp = weatherContainer.querySelector("span:nth-child(3)");

      city.innerText = `${data.name}, ${data.sys.country}\n`;
      weather.innerText = `weather : ${data.weather[0].main}\n`;
      temp.innerText = `temporature : ${data.main.temp}`;
    });
}

function handleGeoError() {
  alert("Cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(handleGeoOk, handleGeoError);
