// import { lazy } from "react";
// const Home = lazy(() => import("../../views/Home"));

import Home from "../../views/Home";
import AddProduct from "../../views/seller/AddProduct";
import Products from "../../views/seller/Products";
import SellerDashboard from "../../views/seller/SellerDashboard";
import DiscountProducts from "../../views/seller/DiscountProducts";

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProducts />,
    ability: ["seller"],
  },
];
