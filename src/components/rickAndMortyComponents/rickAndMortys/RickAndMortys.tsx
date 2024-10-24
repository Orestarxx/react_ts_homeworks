import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {rickAndMortyService} from "../../../services/api.rickAndMorty.service";
import {IFlagsData, IRickAndMorty} from "../../../models/IRickAndMorty";
import RickAndMorty from "../rickAndMorty/RickAndMorty";
import PaginationComponent from "../../paginationComponent/PaginationComponent";

const RickAndMortys = () => {
    const [characters, setCharacters] = useState<IFlagsData & {results:IRickAndMorty[]} | null>(null);
    const [query] = useSearchParams({page:'1'});
    useEffect(() => {
        let page = query.get('page');
      if(page){
          rickAndMortyService.characters.getAllCharacters(+page).then(
              (response:IFlagsData & {results:IRickAndMorty[]}) =>{setCharacters(response)})
      }
    }, [query]);
    return (
        <div>
            {characters?.results.map((character:IRickAndMorty) =><RickAndMorty key={character.id} character={character}/>)}
            { characters && <PaginationComponent data={{next:characters?.nextPage,prev:characters?.prevPage}}/>}
        </div>
    );
};

export default RickAndMortys;