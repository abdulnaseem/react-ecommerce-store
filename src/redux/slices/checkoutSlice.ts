import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface  CheckoutUserDetails {
    firstname: string;
    lastname: string;
    email: string;
    contactnumber: string;
    addressline1: string;
    addressline2: string;
    city: string;
    country: string;
    postcode: string;
}

const initialState: CheckoutUserDetails = {
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
    addressline1: "",
    addressline2: "",
    city: "",
    country: "",
    postcode: "",
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<CheckoutUserDetails>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        getUserDetails: (state) => state,
    }
})


export const { setUserDetails } = checkoutSlice.actions;
export default checkoutSlice.reducer;