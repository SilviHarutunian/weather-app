import { InferActionsTypes } from "../store";

export type HomeActionType = InferActionsTypes<typeof homeActions>;

export const homeActions = {
  changeTempScale: (selectedScale: "celsius" | "fahrenheit") =>
    ({ type: "CHANGE_TEMP_SCALE", payload: { selectedScale } } as const),

  setLocationCity: (locationCity: string) =>
    ({ type: "SET_LOCATION_CITY", payload: { locationCity } } as const),

  setWeatherData: (cityData?: { [key: string]: any[] }) =>
    ({ type: "SET_WEATHER_DATA", payload: { cityData } } as const),

  setSelectedDate: (selectedDate: Date) =>
    ({ type: "SET_SELECTED_DATE", payload: { selectedDate } } as const),
};
