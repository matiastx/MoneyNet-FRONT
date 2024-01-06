import { CategoriesData } from "../../assets/Data/Categories";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categories: CategoriesData,
    selectedCategory: null,
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        selectCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory 
                    ? action.payload 
                    : null
            }
        },
        categories: (state) => {
            return state
        }
    }
})

export const { 
    selectCategory, 
    categories 
} = categoriesSlice.actions;

export default categoriesSlice.reducer;