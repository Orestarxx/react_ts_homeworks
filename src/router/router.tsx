import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layOuts/mainLayOut/MainLayOut";
import Movies from "../components/moviesComponents/movies/Movies";

export  const router =  createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
            {index:true,element:<Movies/>}
        ]}
])