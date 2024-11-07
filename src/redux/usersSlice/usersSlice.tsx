import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {placeHolderService} from "../../services/api.jsonPlaceholder.service";
import {AxiosError} from "axios";

type UsersInitType = {
    users: IUser[] | null,
    error: {} | AxiosError;

}
const getAllUsers = createAsyncThunk('usersSlice/getAllUsers',
    async (_, thunkAPI) => {
        try {
            const users: IUser[] = await placeHolderService.users.getAllUsers();
            return thunkAPI.fulfillWithValue(users);

        } catch (e) {
            console.log(e);
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);

        }
    })
const usersInitState: UsersInitType = {
    users: [],
    error: {}
}
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: usersInitState,
    reducers: {
        helloWorld: () => {
            console.log('hello world');
        }
    },
    extraReducers: builder => builder
        .addCase(getAllUsers.fulfilled,
            (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
        .addCase(getAllUsers.rejected, (state, action) => {
            //як його правильно типізувати??? цю ерору
        })
});

export const usersActions = {
    ...usersSlice.actions,
    getAllUsers
};