import {IGenre} from "../../modules/IGenre";
import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../services/api.movieService";
import {AxiosError} from "axios";

type GenresStateType = {
    genres:IGenre[]
}

const genresInitState:GenresStateType = {
    genres:[]
}
export const getGenres = createAsyncThunk('genresSlice/getGenres',async (_,thunkAPI) =>{
    try {
        const genres:IGenre[] = await movieService.genres.getGenres()
       return  thunkAPI.fulfillWithValue(genres);
    }catch (e) {
        return  thunkAPI.rejectWithValue(e as AxiosError);
    }
})
export const genresSlice = createSlice({
    name:'genresSlice',
    initialState:genresInitState,
    reducers:{
      helloWorld: () =>{

      }
    },
    extraReducers:builder => builder
        .addCase(getGenres.fulfilled, (state, action:PayloadAction<IGenre[]>) =>{
            state.genres = action.payload;
        })
});

export const genresActions = {
    ...genresSlice.actions,getGenres
}