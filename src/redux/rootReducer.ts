import { combineReducers } from 'redux';
import cartReducer from "./cartRedux";

const rootReducer = combineReducers({
    cart: cartReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;