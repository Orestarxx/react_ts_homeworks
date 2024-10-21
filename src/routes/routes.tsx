import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Posts from "../components/postsComponents/posts/Posts";
import Users from "../components/usersComponents/users/Users";
import Products from "../components/productsComponents/products/Products";
import HomePage from "../components/homePage/HomePage";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
        {path:'posts', element:<Posts/>},
            {path:'users',element:<Users/>},
            {path:'products', element:<Products/>},
            {index:true,element:<HomePage/>}
        ]}
])