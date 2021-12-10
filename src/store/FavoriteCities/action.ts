import {
  ADD_NEW_LOCATION_CITY,
  DELETE_CITY,
  ACTION_ADD_NEW_LOCATION_CITY,
} from "./actionTypes";

export function addNewLocationCity(
  newCity: string
): ACTION_ADD_NEW_LOCATION_CITY {
  return {
    type: ADD_NEW_LOCATION_CITY,
    payload: { newCity },
  };
}

export function deleteCityFromList(city: string) {
  return {
    type: DELETE_CITY,
    payload: { city },
  };
}
