import React, {FC} from 'react';
import {IRickAndMorty} from "../../../interfaces/IRickAndMorty";
import './styleRickAndMorty.css';
type RickAndMortyProps = {
    character:IRickAndMorty
}
const RickAndMorty:FC<RickAndMortyProps> = ({character:{name,gender, image}}) => {
    return (
        <div className={'character'}>
            <div>
                <img src={image} alt={image}/>
            </div>
            <div> {name}--{gender}</div>
        </div>
    );
};

export default RickAndMorty;