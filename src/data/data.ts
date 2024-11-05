import axios from "axios";

export const baseURL:string = 'https://jsonplaceholder.typicode.com';
export const endPoints = {
    users:'/users',
    posts:'/posts',
    comments:'/comments'
}
export const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
});