import {createBrowserRouter} from "react-router-dom";

import MainLayOut from "../MainLayOut/MainLayOut";

export const routes =createBrowserRouter([
    {path:'/',element:<MainLayOut/>}
])
