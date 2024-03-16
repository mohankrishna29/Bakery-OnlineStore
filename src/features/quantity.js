import { createSlice } from "@reduxjs/toolkit";

export const cakeSlice = createSlice({
    name: "items",
    initialState: {value: {cakes: 10, ice: 10, drinks: 100, croissant: 5, puffs: 20}},
    reducers: {
        cakes : (state,action) => {
            state.value.cakes-=action.payload
        },
        ice : (state,action) => {
            state.value.ice-=action.payload
        },
        drinks : (state,action) => {
            state.value.drinks-=action.payload
        },
        croissant : (state,action) => {
            state.value.croissant-=action.payload
        },
        puffs : (state,action) => {
            state.value.puffs-=action.payload
        }
    }
})

export const { cakes, ice, drinks, croissant, puffs } = cakeSlice.actions
export default cakeSlice.reducer
