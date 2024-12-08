import { configureStore} from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
