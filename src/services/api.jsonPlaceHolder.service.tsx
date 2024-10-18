import axios from "axios";
import {IDataPost, IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type": "application/jason"}
});
export const placeHolderService = {
    postsService:{
        getPosts: async (page:number):Promise<IDataPost & {posts:IPost[]}> =>{
            console.log(page);
            let limit:number = 0;
            const skip:number =page*20;
            let {data} = await axiosInstance.get<IPost[]>('/posts',{params:{
                    skip:skip
                }});
            let posts:IPost[] = [];
            if(skip > 20){
                limit += skip - 20;
            }
            for (let i = limit; i < skip; i++) {
                posts.push(data[i])

            }
                console.log(posts);
            let dataPosts:IDataPost & {posts:IPost[]} = {
                skip:skip,
                limit:0,
                total:data.length,
                posts:posts
            }
            console.log(dataPosts.total);
            return dataPosts

        }
    }
}