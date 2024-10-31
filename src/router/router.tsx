import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import MoviePage from "../components/pages/moviePage/MoviePage";
import MovieGenre from "../components/moviesComponents/movieGenre/MovieGenre";


export const router = createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
            {index:true,element:<MoviePage/>},
            {path:'/movie/:genre',element:<MovieGenre/>}
        ]}
])