import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

// export interface CartState {
//     products: Array<string | number>,
//     quantity: number,
//     total: number,
// }


export const store = configureStore({
    reducer: rootReducer,
})