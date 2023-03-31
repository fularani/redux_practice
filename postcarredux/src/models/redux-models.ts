export interface CarRequestModel{
    "name":string,
    "year":string,
    "imageUrl":string,
}

export type CarResponseModel = {
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
