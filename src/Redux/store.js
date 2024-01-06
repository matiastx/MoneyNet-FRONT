import {combineReducers, configureStore} from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore"
import storage from "redux-persist/lib/storage"

import productsReducer from './products/productsSlice';
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";
import modalReducer from "./modal/modalSlice";
import ordersReducer from "./orders/ordersSlice";
import userReducer from "./user/userSlice";

const reducers = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    modal: modalReducer,
    orders: ordersReducer,
    user: userReducer
})

const persistConfig = {
    key: "root",
    storage, 
    whitelist: ['cart', 'user']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store);