import { CarRequestModel,CarResponseModel } from "../../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export const initialCarState:CarRequestModel={
    name:"",
    year:"",
    imageUrl:"",
}

const carSlice=createSlice({
    name:"car",
    initialState:initialCarState,
    reducers:{
        setCar(state,action:PayloadAction<CarResponseModel>){
            console.log("action.payload in carSlice",action.payload);
            
            state.name=action.payload.data.attributes.name;
            state.year=action.payload.data.attributes.year;
            state.imageUrl=action.payload.data.attributes.imageUrl;

        }
    },
})

export default carSlice