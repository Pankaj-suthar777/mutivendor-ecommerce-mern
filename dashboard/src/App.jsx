import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoute";
import "./index.css";
import { getRoutes } from "./router/routes";
const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, [allRoutes]);

  return <Router allRoutes={allRoutes} />;
};

export default App;
