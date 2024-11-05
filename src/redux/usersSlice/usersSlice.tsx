import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

type UsersSliceType = {
    users:IUser[],
    user:IUser|null
};
const userInitState:UsersSliceType = {
    users:[],
    user:null
}
export const usersSlice = createSlice({
    name:'userSlice',
    initialState:userInitState,
    reducers:{
        getAllUsers:(state,action:PayloadAction<IUser[]>) =>{
            state.users = action.payload;
        },
        getSingleUser:(state,action:PayloadAction<number>) =>{
            let id:number = action.payload;
            state.users.forEach((user:IUser) =>{
                if(user.id === id){
                    state.user = user
                }
            })
        }
    }
});
export const {getAllUsers,getSingleUser} = usersSlice.actions;