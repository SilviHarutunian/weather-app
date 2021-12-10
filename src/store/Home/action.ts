import {
  CHANGE_TEMP_SCALE,
  SET_LOCATION_CITY,
  SET_WEATHER_DATA,
  SET_SELECTED_DATE,
  ACTION_SET_LOCATION_CITY,
} from "./actionTypes";

export function changeTempScale(selectedScale: "celsius" | "fahrenheit") {
  return {
    type: CHANGE_TEMP_SCALE,
    payload: { selectedScale },
  };
}

export function setLocationCity(
  locationCity: string
): ACTION_SET_LOCATION_CITY {
  return {
    type: SET_LOCATION_CITY,
    payload: { locationCity },
  };
}

export function setWeatherData(cityData?: { [key: string]: any[] }) {
  return {
    type: SET_WEATHER_DATA,
    payload: { cityData },
  };
}

export function setSelectedDate(selectedDate: Date) {
  return {
    type: SET_SELECTED_DATE,
    payload: { selectedDate },
  };
}
