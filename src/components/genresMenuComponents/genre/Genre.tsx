import React, {FC} from 'react';
import {IGenre} from "../../../modules/IGenre";
import {Link} from "react-router-dom";
type GenreProps = {
    genre:IGenre,

}
const Genre:FC<GenreProps> = ({genre:{id,name}}) => {
    return (
        <Link state={{id,name}} to={'/' + name}>{name}</Link>
    );
};

export default Genre;