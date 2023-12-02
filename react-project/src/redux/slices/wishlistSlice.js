import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistsItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],
}

export const wishSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            let buildWishListItem = { ...action.payload }

            state.wishlistsItems?.push(buildWishListItem);

            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistsItems))

        },

        removeWishlist: (state, action) => {

            const updatedWishlists = state.wishlistsItems?.filter((item) => item?._id !== action.payload?._id)

            state.wishlistsItems = updatedWishlists;

            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistsItems));

        },

    },
})

export const { addToWishList, removeWishlist, clearWishlists, wishlistsItems } = wishSlice.actions

export default wishSlice.reducer