import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cartFunctions";

const INITIAL_STATE = {
    cartItems: [],
    hidden: true, 
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        toggleCartHidden: (state) => {
            state.hidden = !state.hidden
        },
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload),
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            }
        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
            }
        }
    }
})

export const {
    toggleCartHidden,
    addToCart,
    removeFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
