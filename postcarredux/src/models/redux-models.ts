export interface CarRequestModel{
    "name":string,
    "year":string,
    "imageUrl":string,
    // loading:string,
}

// export type carResponseDataModel={
//     data:{
//         id:number,
//         attributes:{
//             name: string,
//             year: string,
//             imageUrl: string,
//             createdAt:string,
//             publishedAt:string,
//             updatedAt:string
//         }
//     }
// }

export type CarResponseModel = {
    // status:number,
    // carResponseDataModel: any
    data:{
        id:number,
        attributes:{
            name: string,
            year: string,
            imageUrl: string,
            createdAt:string,
            publishedAt:string,
            updatedAt:string
        }
    }
};

