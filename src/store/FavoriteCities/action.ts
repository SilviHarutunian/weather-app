import { InferActionsTypes } from "../store";

export type FavoriteCitiesActionType = InferActionsTypes<typeof citiesActions>;

export const citiesActions = {
  addNewLocationCity: (newCity: string) =>
    ({ type: "ADD_NEW_LOCATION_CITY", payload: { newCity } } as const),

  deleteCityFromList: (city: string) =>
    ({ type: "DELETE_CITY", payload: { city } } as const),
};
