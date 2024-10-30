import axios from "axios";
import {baseURL, endPoints} from "../data/data.JsonPlaceHolder";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL:baseURL,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

export const jsonPlaceholderService = {
    users: {
        getAllUsers: async (): Promise<IUser[]> => {
            const {data} = await axiosInstance.get<IUser[]>(endPoints.users);
            return data
        }
    },
    posts: {
        getAllPosts: async (): Promise<IPost[]> => {
            const {data} = await axiosInstance.get<IPost[]>(endPoints.posts);
            return data
        }
    },
    comments: {
        getAllComments: async (): Promise<IComment[]> => {
            const {data} = await axiosInstance.get<IComment[]>(endPoints.comments);
            return data
        }
    }
}