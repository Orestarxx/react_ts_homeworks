import React, {useEffect, useState} from 'react';
import {rickAndMortyService} from "../../../services/rickAndMorty.service";
import {IInfo, IRickAndMorty} from "../../../interfaces/IRickAndMorty";
import RickAndMorty from "../rickAndMorty/RickAndMorty";
import './styleRickAndMortys.css';
const RickAndMortys = () => {
    let [characters,setCharacters] = useState<IRickAndMorty[]>([]);
    let [pageRick,setPage] = useState(1);
    let [totalPages,setTotalPages] = useState<IInfo|null>(null);
    useEffect(() =>{
        rickAndMortyService.getCharacters(pageRick).then((response:IRickAndMorty[]) =>{setCharacters(response)});
        rickAndMortyService.getInfo().then((response:IInfo) =>{setTotalPages(response)})

    console.log(pageRick);
    },[pageRick]);
    console.log(totalPages);
    let buttons = document.getElementsByClassName('paginationButton') as HTMLCollection;
    let buttonNext = buttons[1] as HTMLButtonElement;
    let buttonPrevious = buttons[0] as HTMLButtonElement;
    console.log(characters);
    if(totalPages?.pages === pageRick){
        buttonNext.disabled = true;
    }
    if(pageRick !== 1){
        buttonPrevious.disabled = false;
    }
    if(totalPages?.pages !== pageRick){
        buttonNext.disabled = false;
    }
    if(pageRick === 1){
        buttonPrevious.disabled = true
    }
    const next = ()=>{
            ++pageRick;
        console.log(pageRick);
        setPage(pageRick)
    }
    const previous = ()=>{
       --pageRick;
        console.log(pageRick);
        setPage(pageRick)
    }

    return (
        <div>
           <div id={'characterHolder'}> {characters.map((character:IRickAndMorty) =><RickAndMorty key={character.id} character={character}/>)}</div>
            <div id={'buttonHolder'}>
                <button className={'paginationButton'} onClick={previous}>Previous</button>
                <button className={'paginationButton'} onClick={next}>next</button>
            </div>
        </div>
    );
};

export default RickAndMortys;