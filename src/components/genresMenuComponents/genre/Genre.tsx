import React, {FC} from 'react';
import {IGenre} from "../../../modules/IGenre";
type GenreProps = {
    genre:IGenre
}
const Genre:FC<GenreProps> = ({genre}) => {
    return (
        <div>
            {genre.name}
        </div>
    );
};

export default Genre;