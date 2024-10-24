import axios from "axios";
import { IFlagsData, IRickAndMorty} from "../models/IRickAndMorty";


const axiosInstanse = axios.create({
    baseURL:'https://rickandmortyapi.com/api',
    headers:{'Content-Type':'application/json'}
})
 export const rickAndMortyService = {
    characters:{
        getAllCharacters: async (page:number):Promise<IFlagsData & {results:IRickAndMorty[]}> =>{
          const data =  await axiosInstanse.get('/character',{params:{page:page}})
            const dataRickAndMorty:IFlagsData & {results:IRickAndMorty[]} = {...data.data,prevPage:false,nextPage:false};
           if(dataRickAndMorty.results.length){
               dataRickAndMorty.nextPage = dataRickAndMorty.info.next === null ? true : false;
               dataRickAndMorty.prevPage = dataRickAndMorty.info.prev === null? true : false;
           }
            return dataRickAndMorty
        }
    }
 }