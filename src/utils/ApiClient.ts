import axios from "axios";
import { store } from "redux/store";

const client = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const AUTH_ROUTES = ["login"];

const FILE_ROUTES = ["import-csv"];

client.interceptors.request.use(
  (request: any) => {
    const authRoutes = AUTH_ROUTES.some((i) => {
      return request.url === i;
    });
    const uploadRoutes = FILE_ROUTES.some((i) => {
      return request.url.includes(i);
    });
    const { user } = store.getState();
    const { token, companyId } = user;
    if (!authRoutes) {
      request.headers.Authorization = `Bearer ${token}`;
      request.headers.CompanyId = companyId;
      request.headers.timestamp = new Date().getTime().toString();
    }
    if (uploadRoutes) {
      request.headers["Content-Type"] = "multipart/form-data";
    }
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response: any) => {
    if (response.data.error) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  (error: any) => {
    if (error.response?.status === 403 || error.response?.status === 401) {
      const urlParts = error.response.config.url.split("/");
      const path = urlParts.slice(3).join("/"); // This assumes that the path starts at index 3
      // Check if any of the AUTH_ROUTES is a substring of the path
      const isInAuthRoutes = AUTH_ROUTES.some((route) => path.includes(route));
      if (!isInAuthRoutes) {
        localStorage.clear();
        window.location.href = "/";
        return Promise.reject(error.response?.data);
      }
    }
    return Promise.reject(error.response?.data);
  },
);

export default client;
