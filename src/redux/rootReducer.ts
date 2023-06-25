import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
