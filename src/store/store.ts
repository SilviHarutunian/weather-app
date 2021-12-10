import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducerHome from "./Home/reducer";
import { RootStateTypeHome } from "./Home/interface";
import reducerCities from "./FavoriteCities/reducer";
import { RootStateTypeCities } from "./FavoriteCities/interface";

export type RootStateType = {
  reducerHome: RootStateTypeHome;
  reducerCities: RootStateTypeCities;
};

const rootReducer = combineReducers({ reducerHome, reducerCities });

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, middleware);

export default store;
