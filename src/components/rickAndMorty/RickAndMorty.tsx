import React, {FC} from 'react';
import {IRickAndMorty} from "../../interfaces/IRickAndMorty";
type RickAndMortyProps = {
    character:IRickAndMorty
}
const RickAndMorty:FC<RickAndMortyProps> = ({character:{id,name,gender}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{gender}</div>
        </div>
    );
};

export default RickAndMorty;