import React, {useEffect, useState} from 'react';
import {rickAndMortyService} from "../../../services/rickAndMorty.service";
import {IInfo, IRickAndMorty} from "../../../interfaces/IRickAndMorty";
import RickAndMorty from "../rickAndMorty/RickAndMorty";
import './styleRickAndMortys.css';
import '../rickAndMorty/styleRickAndMorty.css';
const RickAndMortys = () => {
    let [characters,setCharacters] = useState<IRickAndMorty[]>([]);
    let [pageRick,setPage] = useState<number>(1);
    let [totalPages,setTotalPages] = useState<IInfo|null>(null);

    useEffect(() =>{
        rickAndMortyService.getCharacters(pageRick).then((response:IRickAndMorty[]) =>{setCharacters(response)});
        rickAndMortyService.getInfo().then((response:IInfo) =>{setTotalPages(response)})

    },[pageRick]);
    let buttons = document.getElementsByClassName('paginationButton') as HTMLCollection;

    const buttonLogic = (buttonsCollection:HTMLCollection):void =>{
        const buttonNext = buttonsCollection[1] as HTMLButtonElement;
        const buttonPrevious = buttonsCollection[0] as HTMLButtonElement;
        if(totalPages?.pages === pageRick && buttonPrevious){
            buttonNext.disabled = true;
        }
        if(pageRick !== 1 && buttonNext){
            buttonPrevious.disabled = false;
        }
        if(totalPages?.pages !== pageRick && buttonNext){
            buttonNext.disabled = false;
        }
        if(pageRick === 1 && buttonPrevious){
            buttonPrevious.disabled = true;
        }
    }
    buttonLogic(buttons)
    const next = ()=>{
            ++pageRick;
        setPage(pageRick)
    }
    const previous = ()=>{
       --pageRick;
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