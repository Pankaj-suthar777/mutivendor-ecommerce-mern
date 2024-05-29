// import { lazy } from "react";
// const Home = lazy(() => import("../../views/Home"));

import Home from "../../views/Home";

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];
