export const CHANGE_TEMP_SCALE = "CHANGE_TEMP_SCALE";
export const SET_LOCATION_CITY = "SET_LOCATION_CITY";
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
export const SET_SELECTED_DATE = "SET_SELECTED_DATE";

export interface ACTION_CHANGE_TEMP_SCALE {
  type: "CHANGE_TEMP_SCALE";
  payload: {
    selectedScale: "celsius" | "fahrenheit";
  };
}

export interface ACTION_SET_LOCATION_CITY {
  type: "SET_LOCATION_CITY";
  payload: {
    locationCity: string;
  };
}

export interface ACTION_SET_WEATHER_DATA {
  type: "SET_WEATHER_DATA";
  payload: {
    cityData: {};
  };
}

export interface ACTION_SET_SELECTED_DATE {
  type: "SET_SELECTED_DATE";
  payload: {
    selectedDate: Date;
  };
}

export type HomeActionType =
  | ACTION_CHANGE_TEMP_SCALE
  | ACTION_SET_LOCATION_CITY
  | ACTION_SET_WEATHER_DATA
  | ACTION_SET_SELECTED_DATE;
