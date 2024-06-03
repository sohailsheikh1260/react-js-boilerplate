import AppRoutes from "navigation/appRoutes";
import { Route, Routes } from "react-router-dom";
import * as AppLoadable from "../AppLoadable";

function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<AppLoadable.Login />} path={AppRoutes.login} />
    </Routes>
  );
}

export default GlobalRoutes;
