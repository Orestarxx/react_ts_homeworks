import axios from "axios";
import {IData, ILogin, ITokenPair} from "../models/IDataDummy";
import {IUser} from "../models/IUser";
import {getFromLocalStorage} from "../helpers/helpers";
import {IProduct} from "../models/IProduct";


const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{'Content-Type':'application/json'}
});
axiosInstance.interceptors.request.use((request) =>{
    if(request.method?.toUpperCase() === 'GET'){
    let tokens = getFromLocalStorage<IUser>('user');
    request.headers.Authorization = 'Bearer ' + tokens.accessToken;
    }
    return request
})

export const dummyService = {
    auth:{
        login: async (user:ILogin):Promise<IUser> =>{
            let userLogin:ILogin = {...user,expiresInMins:1};
              const {data:userWithTokens} =  await axiosInstance.post<IUser>('/login',userLogin);
            console.log(userWithTokens);
            localStorage.setItem('user',JSON.stringify(userWithTokens))
            return userWithTokens;
        }
    },
    get:{
        getAllProducts: async ():Promise<IData & {products:IProduct[]}> =>{
            const {data} = await axiosInstance.get<IData & {products:IProduct[]}>('products');
            return data
        }
    }
}
export const refresh = async ():Promise<ITokenPair> =>{
    let userWithToken = getFromLocalStorage<IUser>('user');
    const {data} =  await axiosInstance.post<ITokenPair>('/refresh',{
        refreshToken:  userWithToken.refreshToken,
        expiresInMins: 1
    });
    userWithToken.accessToken = data.accessToken;
    userWithToken.refreshToken = data.refreshToken;
    localStorage.setItem('user',JSON.stringify(userWithToken));
    return data
}