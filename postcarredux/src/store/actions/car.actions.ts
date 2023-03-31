import carSlice from "../slices/carSlice";
import { AnyAction,ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "../store";
import { CarRequestModel,CarResponseModel } from "../../models/redux-models";
import CarService from "../../service/carService";

export const carActions=carSlice.actions;

export const postCars=(payload:CarRequestModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:CarResponseModel=await CarService.postCarsData(payload);
        console.log("response in car-actions.ts",response);
        
        dispatch(carActions.setCar(response))
    }
}