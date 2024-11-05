
import {axiosInstance, endPoints} from "../../data/data";
import {IUser} from "../../models/IUser";


export const usersService = {
    users:{
        getAllUsers: async ():Promise<IUser[]> =>{
            return (await axiosInstance.get(endPoints.users)).data
        }
    }
}