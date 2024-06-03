import AppRoutes from "navigation/appRoutes";
import { Route, Routes } from "react-router-dom";
import * as AppLoadable from "../AppLoadable";

function ProtectRoutes() {
  return (
    <Routes>
      <Route element={<AppLoadable.Login />} path={AppRoutes.login} />
      <Route element={<AppLoadable.Dashboard />} path={AppRoutes.dashboard} />
    </Routes>
  );
}

export default ProtectRoutes;
