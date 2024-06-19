import authReducer from "./Reducers/authReducers";
import categoryReducer from "./Reducers/categoryReducer";
import chatReducer from "./Reducers/chatReducer";
import productReducer from "./Reducers/productReducers";
import sellerReducer from "./Reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
  chat: chatReducer,
};
export default rootReducer;
