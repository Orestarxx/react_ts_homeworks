import React, {FC} from 'react';
import {IRickAndMorty} from "../../../models/IRickAndMorty";
type RickMortyProps = {
    character:IRickAndMorty
}
const RickAndMorty:FC<RickMortyProps> = ({character}) => {
    return (
        <div>
           <div>{character.id}</div>
        </div>
    );
};

export default RickAndMorty;