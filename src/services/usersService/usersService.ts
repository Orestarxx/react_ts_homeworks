import axios from "axios";
import {baseURL, endPoints} from "../../data/data";
import {IUser} from "../../models/IUser";

const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
});
export const jsonPlaceholderService = {
    users:{
        getAllUsers: async ():Promise<IUser[]> =>{
            return (await axiosInstance.get(endPoints.users)).data
        },
        getSingleUser: async (id:number) =>{
            return (await axiosInstance.get(endPoints.users + `/${id}`))
        }
    }
}