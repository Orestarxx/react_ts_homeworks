import axios from "axios";
import {baseURL, endPoints, options} from "../data/data";
import {IDataMovie} from "../models/IDataMovie";
import {IMovie} from "../models/IMovie";
import {IGenreData} from "../models/IGenre";
import {ISingleMovie} from "../models/ISingleMovie";
import {IDataVideo} from "../models/IVideo";

const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:options
});

export const movieService = {
    movies:{
        getAllMovies: async ():Promise<IDataMovie & {results:IMovie[]}> =>{
           const {data} = await axiosInstance.get<IDataMovie & {results:IMovie[]}>(endPoints.movies);
            return data
        },
        getSingleMovieById: async (id:string):Promise<ISingleMovie> =>{
            const {data} = await axiosInstance.get<ISingleMovie>(endPoints.singleUser + id)
            console.log(data);
            return data
        },
        getVideos: async (id:string):Promise<IDataVideo> =>{
            const {data} = await axiosInstance.get<IDataVideo>(endPoints.singleUser + `${id}/videos`);
            return data
        }
    },
    genres:{
        getGenres: async ():Promise<IGenreData> =>{
          const {data}  = await axiosInstance.get<IGenreData>(endPoints.genres);
          return data
        },
        getMoviesWithGenre: async (genre:string,page:number):Promise<IDataMovie & {results:IMovie[]}> =>{
          const {data} = await  axiosInstance.get<IDataMovie & {results:IMovie[]}>(endPoints.movies,{
                params:{
                with_genres:genre,
                    page:page
                }
            })
            return  {...data,page:page}
        }
    }
}