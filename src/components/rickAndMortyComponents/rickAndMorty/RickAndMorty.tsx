import React, {FC} from 'react';
import {IRickAndMorty} from "../../../interfaces/IRickAndMorty";
import './styleRickAndMorty.css';
type RickAndMortyProps = {
    character:IRickAndMorty
}
const RickAndMorty: FC<RickAndMortyProps> = ({character: {name, image, status}}) => {
    return (
        <div className={'character'}>
            <div>
                <img src={image} alt={image}/>
            </div>
            <div>
                <div>
                    <div>{name}</div>
                </div>
                <div>
                    <div className={'circle'}></div>
                    <div className={'status'}>{status}</div>
                </div>
            </div>
        </div>
    );
};

export default RickAndMorty;