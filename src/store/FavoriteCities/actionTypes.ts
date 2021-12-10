export const ADD_NEW_LOCATION_CITY = "ADD_NEW_LOCATION_CITY";
export const DELETE_CITY = "DELETE_CITY";

export interface ACTION_ADD_NEW_LOCATION_CITY {
  type: "ADD_NEW_LOCATION_CITY";
  payload: {
    newCity: string;
  };
}

export interface ACTION_DELETE_CITY {
  type: "DELETE_CITY";
  payload: {
    city: string;
  };
}

export type FavoriteCitiesActionType =
  | ACTION_ADD_NEW_LOCATION_CITY
  | ACTION_DELETE_CITY;
