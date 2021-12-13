import { HomeActionType } from "./action";

const initialState = {
  selectedScale: "celsius",
  locationCity: localStorage.getItem("locationCity"),
  cityWeather: null,
  selectedDate: new Date(),
};

const reducerHome = (state = initialState, action: HomeActionType) => {
  switch (action.type) {
    case "CHANGE_TEMP_SCALE":
      return {
        ...state,
        selectedScale: action.payload.selectedScale,
      };
    case "SET_LOCATION_CITY":
      return {
        ...state,
        locationCity: action.payload.locationCity,
      };
    case "SET_WEATHER_DATA":
      return {
        ...state,
        cityWeather: action.payload.cityData,
      };
    case "SET_SELECTED_DATE":
      return {
        ...state,
        selectedDate: action.payload.selectedDate,
      };
    default:
      return state;
  }
};

export default reducerHome;
