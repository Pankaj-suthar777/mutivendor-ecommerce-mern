import OrderReducer from "./Reducers/OrderReducer";
import PaymentReducer from "./Reducers/PaymentReducer";
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
  order: OrderReducer,
  payment: PaymentReducer,
};
export default rootReducer;
