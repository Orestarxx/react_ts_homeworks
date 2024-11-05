import {axiosInstance, endPoints} from "../../data/data";
import {IPost} from "../../models/IPost";

export const postsService = {
    posts:{
        getAllPosts: async ():Promise<IPost[]> =>{
            return (await axiosInstance.get<IPost[]>(endPoints.posts)).data
        }
    }
}