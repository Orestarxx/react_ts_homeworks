import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {placeHolderService} from "../../services/api.jsonPlaceholder.service";
import {AxiosError} from "axios";

type UsersInitType = {
    users: IUser[],
    error: AxiosError | null | unknown;
    user:IUser | null;

}
const getAllUsers = createAsyncThunk('usersSlice/getAllUsers',
    async (_, thunkAPI) => {
        try {
            const users: IUser[] = await placeHolderService.users.getAllUsers();
            return thunkAPI.fulfillWithValue(users);

        } catch (e) {
            console.log(e);
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response);

        }
    })
const usersInitState: UsersInitType = {
    users: [],
    error: null,
    user:null
}
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: usersInitState,
    reducers: {
        getSingleUser: (state,action:PayloadAction<IUser>) => {
            state.user = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAllUsers.fulfilled,
            (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
        .addCase(getAllUsers.rejected, (state, action:PayloadAction<AxiosError |unknown| number>) => {
            console.log(action.payload);
            state.error = action.payload

        })
});

export const usersActions = {
    ...usersSlice.actions,
    getAllUsers
};