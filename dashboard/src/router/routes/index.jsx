import { privateRoutes } from "./privateRoute";
import MainLayout from "../../layout/MainLayout";

export const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
