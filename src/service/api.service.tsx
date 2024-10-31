import axios from "axios";
import {baseURL, endPoints, options} from "../data/data";
import {IDataMovie} from "../models/IDataMovie";
import {IMovie} from "../models/IMovie";
import {IGenreData} from "../models/IGenre";

const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:options
});

export const movieService = {
    movies:{
        getAllMovies: async ():Promise<IDataMovie & {results:IMovie[]}> =>{
           const {data} = await axiosInstance.get<IDataMovie & {results:IMovie[]}>(endPoints.movies);
            return data
        }
    },
    genres:{
        getGenres: async ():Promise<IGenreData> =>{
          const {data}  = await axiosInstance.get<IGenreData>(endPoints.genres);
          return data
        },
        getMoviesWithGenre: async (genre:string):Promise<IDataMovie & {results:IMovie[]}> =>{
          const {data} = await  axiosInstance.get<IDataMovie & {results:IMovie[]}>(endPoints.movies,{
                params:{
                with_genres:genre
                }
            })
            return data
        }
    }
}