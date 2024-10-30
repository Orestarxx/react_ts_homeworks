import {create} from "zustand/react";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
type StoreType = {
   usersPart:{
       allUsers:IUser[],
       getAllUsers:(users:IUser[]) => void
   },
    postsPart:{
        allPosts:IPost[],
        getAllPosts:(posts:IPost[]) => void
    },
    commentsPart:{
        allComments:IComment[],
        getAllComments:(comments:IComment[]) => void
    }
}
export const useStore = create<StoreType>()((set) => ({
    usersPart:{
        allUsers:[],
        getAllUsers:(users:IUser[]) =>{
            return set(state => ({
                ...state,
                usersPart:{
                    ...state.usersPart,
                    allUsers:users
                }
            }))
        }
    },
    postsPart:{
        allPosts:[],
        getAllPosts:(posts:IPost[]) =>{
           return set(state => ({
               ...state,
               postsPart:{
                   ...state.postsPart,
                   allPosts:posts
               }
           }))
        }
    },
    commentsPart:{
        allComments:[],
        getAllComments:(comments:IComment[]) =>{
           return set(state => ({
               ...state,
               commentsPart:{
                   ...state.commentsPart,
                   allComments:comments
               }
           }))
        }
    }
}))