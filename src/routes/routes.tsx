import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LayOut from "../layOut/LayOut";
import ProductsPage from "../pages/productsPage/ProductsPage";
import LoginPage from "../pages/loginPage/LoginPage";

export const routes =  createBrowserRouter([
    {path:'/',element:<LayOut/>,children:[
            {index:true,element:<HomePage/>},
            {path:'/login', element:<LoginPage/>},
            {path:'/products',element:<ProductsPage/>}
        ]}
])