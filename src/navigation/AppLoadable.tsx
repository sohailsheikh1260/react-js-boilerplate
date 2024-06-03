// import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Login = Loadable({
  loader: () => import("pages/Login"),
  loading: () => <p>loading</p>,
});

export const Dashboard = Loadable({
  loader: () => import("pages/Dashboard"),
  loading: () => <p>loading</p>,
});
