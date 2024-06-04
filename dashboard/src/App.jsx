import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoute";
import "./index.css";
import { getRoutes } from "./router/routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/Reducers/authReducers";
const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((prevRoutes) => [...prevRoutes, { ...routes }]);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(get_user_info(token));
    }
  }, [token, dispatch]);

  return <Router allRoutes={allRoutes} />;
};

export default App;
