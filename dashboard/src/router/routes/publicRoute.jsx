// import { lazy } from "react";
import Home from "../../views/Home";
import AdminLogin from "../../views/auth/AdminLogin";
import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";
import UnAuthorized from "../../views/UnAuthorized";
import Success from "../../views/Success";
// const Login = lazy(() => "../../views/auth/Login");
// const Register = lazy(() => "../../views/auth/Register");

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  },
  {
    path: "/success?",
    element: <Success />,
  },
];

export default publicRoutes;
