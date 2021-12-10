import Home from "../pages/Home/Home";
import FavoriteCities from "../pages/FavoriteCities/FavoriteCities";

const routes = [
  { path: "/home", element: Home },
  { path: "/home/:selectedCity", element: Home },
  { path: "/favorite-cities", element: FavoriteCities },
];

export default routes;
