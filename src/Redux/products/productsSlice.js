import { ProductsData } from "../../assets/Data/ProductsData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: ProductsData,
    totalproducts: ProductsData.length
}

export const productsSlice = createSlice({
    name: "products",
    initialState,   
    reducers: {
        getProducts: (state) => {
            return state;
        }
    }
})

export const { 
    getProducts 
} = productsSlice.actions;

export default productsSlice.reducer;
