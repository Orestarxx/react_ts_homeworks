import axios from "axios";
import {IDataPost, IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type": "application/jason"}
});
export const placeHolderService = {
    postsService: {
        getPosts: async (page: number): Promise<IDataPost & { posts: IPost[] }> => {
            console.log(page);
            let limit: number = 0;
            const skip: number = page * 20;
            let {data} = await axiosInstance.get<IPost[]>('/posts', {
                params: {
                    page: skip
                }
            });

            let dataPosts: IDataPost & { posts: IPost[] } = {
                skip: skip,
                limit: limit,
                total: data.length,
                posts: [],
                next: false,
                prev: false
            }

            if (skip > 20) {
                limit += skip - 20;
            }
            for (let i = limit; i < skip; i++) {
                dataPosts.posts.push(data[i])
            }
            if (dataPosts.posts.length) {
                let lastId = dataPosts.posts[dataPosts.posts?.length - 1]?.id
                dataPosts.next = lastId === dataPosts.total ? true : false;
                dataPosts.prev = page > 1 ? false : true;
            }

            return dataPosts

        }
    }
}