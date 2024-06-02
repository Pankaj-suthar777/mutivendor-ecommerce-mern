import authReducer from "./Reducers/authReducers";
import categoryReducer from "./Reducers/categoryReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
};
export default rootReducer;
