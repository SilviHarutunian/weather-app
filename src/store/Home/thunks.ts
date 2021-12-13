import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { getWeatherDataByPosition, cityWeather } from "../../api/api";
import { homeActions } from "./action";
import { citiesActions } from "../FavoriteCities/action";
import { HomeActionType } from "./action";
import { FavoriteCitiesActionType } from "../FavoriteCities/action";
import { AppStateType } from "../store";

export const getLocation =
  (): ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    HomeActionType | FavoriteCitiesActionType
  > =>
  async (dispatch) => {
    const weatherData = await getWeatherDataByPosition();

    localStorage.setItem("locationCity", weatherData.data.name);
    dispatch(homeActions.setLocationCity(weatherData.data.name));

    dispatch(citiesActions.addNewLocationCity(weatherData.data.name));
    localStorage.setItem(
      "favoriteCities",
      JSON.stringify([weatherData.data.name])
    );
  };

export const getCityWeather =
  (
    locationCity: string
  ): ThunkAction<Promise<void>, AppStateType, unknown, HomeActionType> =>
  async (dispatch) => {
    dispatch(homeActions.setWeatherData());
    const cityWeatherGetData = await cityWeather(locationCity);
    dispatch(homeActions.setWeatherData(cityWeatherGetData.data));
  };
