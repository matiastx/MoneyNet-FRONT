import { createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hiddenModal: true,
    modalTitle: "",
    modalColor: "",
}

export const modalSlice = createSlice({
    name: "modal",
    initialState: INITIAL_STATE,
    reducers: {
        toggleModalHidden: (state) => {
            state.hiddenModal = !state.hiddenModal
        },
        changeModal: (state, action) => {
            return {
                ...state,
                modalTitle: action.payload.title,
                modalColor: action.payload.color,
            }
        },
    }
})

export const {
    toggleModalHidden,
    changeModal,
} = modalSlice.actions;

export default modalSlice.reducer;