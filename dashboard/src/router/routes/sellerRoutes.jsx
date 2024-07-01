// import { lazy } from "react";
// const Home = lazy(() => import("../../views/Home"));

import AddProduct from "../../views/seller/AddProduct";
import Products from "../../views/seller/Products";
import SellerDashboard from "../../views/seller/SellerDashboard";
import DiscountProducts from "../../views/seller/DiscountProducts";
import Orders from "../../views/seller/Orders";
import Payments from "../../views/seller/Payments";
import SellerToAdmin from "../../views/seller/SellerToAdmin";
import SellerToCustomer from "../../views/seller/SellerToCustomer";
import Profile from "../../views/seller/Profile";
import Pending from "../../views/Pending";
import Deactive from "../../views/Deactive";
import EditProduct from "../../views/seller/EditProduct";
import OrderDetails from "../../views/seller/OrderDetails";
import AddBanner from "../../views/seller/AddBanner";

export const sellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
  },
  {
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
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
    visibility: ["active", "deactive"],
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
    role: "seller",
    visibility: ["active", "deactive", "pending"],
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
    visibility: ["active", "deactive", "pending"],
  },

  {
    path: "/seller/dashboard/add-banner/:productId",
    element: <AddBanner />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "seller",
    ability: ["active", "deactive"],
  },
];
