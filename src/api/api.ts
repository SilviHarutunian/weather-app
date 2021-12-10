import axios from "axios";

const instance = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
});

const API_KEY = "276955ca66d9a95f1a309ac1b02f8155";

const getUserCoordinates = (): Promise<GeolocationPosition> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

export const getWeatherDataByPosition = async () => {
  const position: GeolocationPosition = await getUserCoordinates();
  const weatherData = await instance.get(
    `weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`
  );

  return weatherData.data;
};

export const cityWeather = async (cityName?: string) => {
  const cityWeatherFetchData = await instance.get(
    `forecast?q=${cityName}&units=metric&appid=${API_KEY}`
  );

  return cityWeatherFetchData.data;
};
