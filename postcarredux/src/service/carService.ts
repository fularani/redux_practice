// import Api from "./Api";

import axios from "axios";
import { CarRequestModel } from "../models/redux-models";

// 
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    async postCarsData(payload:CarRequestModel) {        
        var response=await axios.post("http://localhost:1337/api/cars", {data:payload});
        console.log("response",response)
        // let res={
        //     status:response.status,
        //     data:response.data
        // }
        // // return response.data;
        return response;
    }
}