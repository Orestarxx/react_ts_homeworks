import axios, {AxiosInstance, AxiosResponse} from "axios";
import IUser from "../interfaces/IUser";

const axiosInstance:AxiosInstance = axios.create(
    {
        baseURL:'https://dummyjson.com/',
        headers:{"content-type":"application/json"}
    }
);
export const getUsers = async ():Promise<IUser[]> =>{
    let users:AxiosResponse<IUser[]> = await axiosInstance.get<IUser[]>('/users');
    console.log(users.data);
    return users.data;
}