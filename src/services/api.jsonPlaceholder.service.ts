import {IUser} from "../models/IUser";
import {axiosInstance} from "../data/data";
import {endPoints} from "../urls/urls";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";


export const placeHolderService = {
    users:{
        getAllUsers: async ():Promise<IUser[]> =>{
            return (await axiosInstance.get<IUser[]>(endPoints.users)).data;
        }
    },
    posts:{
        getAllPosts: async ():Promise<IPost[]> =>{
            return (await axiosInstance.get<IPost[]>(endPoints.posts)).data;
        }
    },
    comments:{
        getAllComments: async ():Promise<IComment[]> =>{
            return (await axiosInstance.get<IComment[]>(endPoints.comments)).data;
        }
    }
}