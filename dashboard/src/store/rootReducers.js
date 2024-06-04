import authReducer from "./Reducers/authReducers";
import categoryReducer from "./Reducers/categoryReducer";
import productReducer from "./Reducers/productReducers";
import sellerReducer from "./Reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
};
export default rootReducer;
