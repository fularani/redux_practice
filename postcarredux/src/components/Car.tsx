import React,{useState} from 'react';
import { CarRequestModel } from '../models/redux-models';
import { useAppDispatch,useAppSelector } from "../hooks/hooks";
import {postCars} from "../store/actions/car.actions"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Car = () => {

    const dispatch=useAppDispatch();
    const state=useAppSelector(state=>state);
    const name=useAppSelector(state=>state.car.name);
    const year=useAppSelector(state=>state.car.year);
    const imageUrl=useAppSelector(state=>state.car.imageUrl);


    console.log("allcardata inside Car.tsx.....state",state,"\nname",name,"\nyear",year,"\nimageUrl",imageUrl);

    const [formState, setformState] = useState<CarRequestModel>({
        name:"",
        year:"",
        imageUrl:""
    })

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setformState({
            ...formState,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit=async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        if(!formState.name || !formState.year || !formState.imageUrl) return;

        let payload={
            name:formState.name,
            year:formState.year,
            imageUrl:formState.imageUrl,
        }

        dispatch(postCars(payload))
           
        setformState({
            name:"",
            year:"",
            imageUrl:""
        })

    }

  return (
    <div>
        <ToastContainer/>
        <p>Create A New Car</p>
        <form className='d-flex flex-column' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"></label>
                <input type="text" id='name' name="name" value={formState.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="year"></label>
                <input type="text" id='year' name="year" value={formState.year} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="imageUrl"></label>
                <input type="text" id='imageUrl' name="imageUrl" value={formState.imageUrl} onChange={handleChange}/>
            </div> 
            <button type="submit">add</button>
        </form>
    </div>
  )
}

export default Car
