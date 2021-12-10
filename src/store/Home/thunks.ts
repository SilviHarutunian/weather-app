import { Dispatch } from "redux";
import { getWeatherDataByPosition, cityWeather } from "../../api/api";
import { setLocationCity, setWeatherData } from "./action";
import { addNewLocationCity } from "../FavoriteCities/action";
import { HomeActionType } from "./actionTypes";
import { FavoriteCitiesActionType } from "../FavoriteCities/actionTypes";

export const getLocation =
  () =>
  async (dispatch: Dispatch<HomeActionType | FavoriteCitiesActionType>) => {
    const weatherData = await getWeatherDataByPosition();

    localStorage.setItem("locationCity", weatherData.name);
    dispatch(setLocationCity(weatherData.name));

    dispatch(addNewLocationCity(weatherData.name));
    localStorage.setItem("favoriteCities", JSON.stringify([weatherData.name]));
  };

export const getCityWeather =
  (locationCity: string) => async (dispatch: any) => {
    dispatch(setWeatherData());
    const cityWeatherGetData = await cityWeather(locationCity);
    dispatch(setWeatherData(cityWeatherGetData));
  };
