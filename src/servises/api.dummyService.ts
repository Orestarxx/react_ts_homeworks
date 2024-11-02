import axios from "axios";
import {baseURL, endPoints} from "../data/data";
import {IDataUserLogin, ILoginUserResponse, IRefreshResponse} from "../models/ILoginUser";
import {getFromLocalStorage} from "../helpers/helperGetFromLocalStorage";
import {IDataDummy, IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL:baseURL,
    headers: { 'Content-Type': 'application/json' }
});
axiosInstance.interceptors.request.use((request) =>{
    if(request.method?.toUpperCase() === 'GET'){
        const token = getFromLocalStorage<ILoginUserResponse>('user').accessToken;
        request.headers.Authorization = 'Bearer ' + token;
    }
    return request
})
export const dummyService = {
    auth:{
        login: async (user:IDataUserLogin):Promise<ILoginUserResponse> =>{
            const userLogin = {...user,expiresInMins:1};
            const {data:loginResponse} = await axiosInstance.post<ILoginUserResponse>(endPoints.login,userLogin);
            console.log(loginResponse)
            localStorage.setItem('user',JSON.stringify(loginResponse));
            return loginResponse
        },
        refresh: async ():Promise<IRefreshResponse> =>{
         const tokensUser = getFromLocalStorage<ILoginUserResponse>('user');
          const {data} =   await axiosInstance.post<IRefreshResponse>(endPoints.refresh,{
             refreshToken:tokensUser.accessToken,
             expiresInMins:1
            });
            console.log(data.accessToken,data.refreshToken);
            tokensUser.refreshToken = data.refreshToken;
            tokensUser.accessToken = data.accessToken;
            localStorage.setItem('user',JSON.stringify(tokensUser));
             return data
        }
    },
    posts:{
        getAllPosts: async ():Promise<IDataDummy & {posts:IPost[]}> =>{
          const {data} = await axiosInstance.get<IDataDummy & {posts:IPost[]}>(endPoints.posts);
            console.log(data);
            return  data
        }
    }
}
