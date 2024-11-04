import React, {FC} from 'react';
import {IGenre} from "../../../models/IGenre";
import './genreStyle.css'
import {Link} from "react-router-dom";
type GenreProps = {
    genre:IGenre,
    colorGenre:(name:string) =>void
}
const Genre:FC<GenreProps> = ({genre:{id,name},colorGenre}) => {

    return (
        <li className={'genre'} onClick={() =>{
            colorGenre(name)
        }}>
           <Link state={{id:id,name:name}} to={'/movie/'+ id}>{name}</Link>
        </li>
    );
};

export default Genre;