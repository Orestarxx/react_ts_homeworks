import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import LoginPage from "../pages/loginPage/LoginPage";
import PostsPage from "../pages/postsPage/PostsPage";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
            {index:true,element:<LoginPage/>},
            {path:'posts',element:<PostsPage/>}
        ]}
])