// import { lazy } from "react";
// const Home = lazy(() => import("../../views/Home"));

import Home from "../../views/Home";
import AddProduct from "../../views/seller/AddProduct";
import Products from "../../views/seller/Products";
import SellerDashboard from "../../views/seller/SellerDashboard";
import DiscountProducts from "../../views/seller/DiscountProducts";
import Orders from "../../views/seller/Orders";
import Payments from "../../views/seller/Payments";
import SellerToAdmin from "../../views/seller/SellerToAdmin";
import SellerToCustomer from "../../views/seller/SellerToCustomer";
import Profile from "../../views/seller/Profile";

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    ability: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    ability: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    role: "seller",
    status: "active",
  },
];
