const apiKey = "e9230c66468d61b1887c8c10446c6026";

const getWeather = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
