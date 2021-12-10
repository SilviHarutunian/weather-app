import { Routes, Route, Navigate } from "react-router-dom";

import routes from "./routes";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {routes.map((route) => {
        const Component = route.element;
        return <Route path={route.path} element={<Component />} />;
      })}
      ;
    </Routes>
  );
}

export default Router;
