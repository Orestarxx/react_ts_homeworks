import React, {useEffect, useState} from 'react';
import {rickAndMortyService} from "../../services/rickAndMorty.service";
import {IRickAndMorty} from "../../interfaces/IRickAndMorty";
import RickAndMorty from "./RickAndMorty";

const RickAndMortys = () => {
    let [characters,setCharacters] = useState<IRickAndMorty[]>([]);
    let [pageRick,setPage] = useState(1);
    useEffect(() =>{

        rickAndMortyService.getCharacters(pageRick).then((response:IRickAndMorty[]) =>{setCharacters(response)});




    },[pageRick]);
    console.log(pageRick);

    return (
        <div>
           <div> {characters.map((character:IRickAndMorty) =><RickAndMorty key={character.id} character={character}/>)}</div>
            <div>
                <button onClick={()=>{
                    ++pageRick;
                    setPage(pageRick)
                }}>nextPage</button>
                <button onClick={()=>{
                    --pageRick;
                    setPage(pageRick)
                }}>previousPage</button>
            </div>
        </div>
    );
};

export default RickAndMortys;