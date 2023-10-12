import { combineReducers } from "redux";
import categoryReducer from "./categorySlice";
import customerReducer from "./customerSlice";
import generalReducer from "./generalSlice";
import productReducer from "./productSlice";
import orderReducer from "./orderSlice";
import storeReducer from "./storeSlice";
import brandReducer from "./brandSlice";
import userReducer from "./userSlice";

const appReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  brand: brandReducer,
  store: storeReducer,
  general: generalReducer,
  product: productReducer,
  category: categoryReducer,
  customer: customerReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
