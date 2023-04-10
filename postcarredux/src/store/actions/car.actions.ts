import carSlice from "../slices/carSlice";
import { AnyAction,ThunkAction } from "@reduxjs/toolkit";
import {RootState} from "../store";
import { CarRequestModel,CarResponseModel } from "../../models/redux-models";
import CarService from "../../service/carService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const carActions=carSlice.actions;

export const postCars=(payload:CarRequestModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{       
        // const response:CarResponseModel=await CarService.postCarsData(payload);

        // console.log("response in car-actions.ts"
        // // ,response.status
        // ,response.data);

        // dispatch(carActions.setCar(response))

        await CarService.postCarsData(payload)
        .then((response)=>{
            if ([200, 201].includes(response.status) && response.data && response.data.data) {
                dispatch(carActions.setCar(response.data))
                toast.success('Your Form submited successfully !', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                toast.error(`${response.status} ${response.statusText}`, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
        .catch((error)=>{
            console.log(error);
      
            toast.error('Something Wrong !', {
            position: toast.POSITION.TOP_CENTER
            });
        })
    }
}