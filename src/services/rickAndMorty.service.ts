import axios from "axios";
import {IRickAndMorty, IRickAndMortyData} from "../interfaces/IRickAndMorty";

const axiosInstanceRickAndMorty = axios.create({
    baseURL:'https://rickandmortyapi.com/api'
});

export const rickAndMortyService = {
    getCharacters: async (page:number):Promise<IRickAndMorty[]> =>{
        return (await axiosInstanceRickAndMorty.get(`/character?page=${page}`)).data.results;
    }
}