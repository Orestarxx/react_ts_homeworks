import axios, {AxiosInstance} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance:AxiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

const userService = {
    getUsers: async ():Promise<IUser[]> =>{return ( await axiosInstance.get<IUser[]>('/users')).data}
}
const postService = {
    getPosts: async ():Promise<IPost[]> =>{return (await axiosInstance.get<IPost[]>('/posts')).data},
    getPostsOfUser: async  (userId:number):Promise<IPost[]> =>{
        return (await axiosInstance.get<IPost[]>(`/posts?userId=${userId}`)).data}
}
const commentService = {
    getComments : async ():Promise<IComment[]> =>{return (await axiosInstance.get<IComment[]>('/comments')).data}
}
export {userService,commentService,postService};