import axios from "axios";
import {API_KEY} from "../data/data";
import {baseURL, endPoints} from "../data/urls";
import {IGenre, IGenreData} from "../modules/IGenre";

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
        getGenres:async ():Promise<IGenre[]> =>{
             return (await axiosInstance.get<IGenreData>(endPoints.genres)).data.genres;
        }
    }
}