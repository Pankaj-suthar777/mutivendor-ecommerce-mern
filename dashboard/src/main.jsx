import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
//import App from "./App";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              backgroundColor: "#283046",
              color: "white",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
