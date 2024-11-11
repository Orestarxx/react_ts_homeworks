import axios from "axios";
import {API_KEY} from "../data/data";
import {baseURL, endPoints} from "../data/urls";
import {IGenre, IGenreData} from "../modules/IGenre";
import {IMovie, IMovieData} from "../modules/IMovie";

const axiosInstance = axios.create({
    baseURL:baseURL,
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_KEY
    }
})
export  const movieService = {
    genres:{
        getGenres: async ():Promise<IGenre[]> =>{
             return (await axiosInstance.get<IGenreData>(endPoints.genres)).data.genres;
        }
    },
    movies:{
        getAllMovies: async (id:number,page:number):Promise<IMovieData & {results:IMovie[]}> =>{
           const {data} = await axiosInstance.get<IMovieData & {results:IMovie[]}>(endPoints.discoverMovie,{
               params:{
                   with_genres:id,
                   page:page
               }
           })
             const dataForPagination:IMovieData & {results:IMovie[]} = {
               total_pages: data.total_pages,
                 page:page,
                 total_results:data.total_results,
                 results:data.results,
                 next:false,
                 previous:false
             }
            dataForPagination.next = dataForPagination.total_pages === page ? true : false;
            dataForPagination.previous = dataForPagination.page === 1 ? true : false;


            return dataForPagination
        }
    }
}