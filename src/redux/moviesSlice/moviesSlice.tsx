import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, IMovieData} from "../../modules/IMovie";
import {movieService} from "../../services/api.movieService";

type MovieInitType = {
    movies:IMovieData & {results:IMovie[]} | null

}
const movieInitState:MovieInitType = {
    movies:null,

}
const getAllMovies = createAsyncThunk('moviesSlice/getAllMovies',
    async ({id,page}:{id:number,page:number},thunkAPI) =>{
    try {
        const data = await movieService.movies.getAllMovies(id,page)
        return thunkAPI.fulfillWithValue(data)
    }catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})


export const moviesSlice = createSlice({
    name:"moviesSlice",
    initialState:movieInitState,
    reducers:{
    },
    extraReducers:builder => builder
        .addCase(getAllMovies.fulfilled, (state, action:PayloadAction<IMovieData & {results:IMovie[]}>) =>{
            state.movies = action.payload

        })
})
export const movieActions = {
    ...moviesSlice.actions,
    getAllMovies
}