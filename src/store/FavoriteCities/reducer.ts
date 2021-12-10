import {
  ADD_NEW_LOCATION_CITY,
  DELETE_CITY,
  FavoriteCitiesActionType,
} from "./actionTypes";

const initialState = {
  newCity: "",
  favoriteCities: JSON.parse(localStorage.getItem("favoriteCities") || "[]"),
};

const reducerCities = (
  state = initialState,
  action: FavoriteCitiesActionType
) => {
  switch (action.type) {
    case ADD_NEW_LOCATION_CITY:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload.newCity],
      };
    case DELETE_CITY:
      return {
        ...state,
        favoriteCities: [
          ...state.favoriteCities.filter(
            (item: string) => item !== action.payload.city
          ),
        ],
      };
    default:
      return state;
  }
};

export default reducerCities;
