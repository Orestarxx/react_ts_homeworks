import React, {FC} from 'react';
import {products} from "../../data";
import {IProduct} from "../../interfaces/productInterface";
import Product from "./Product";

const Products:FC = () => {
    return (
        <div>
            {products.map((product:IProduct) =><Product  title={product.title} description={product.description} id={product.id} key={product.id}/>)}
        </div>
    );
};

export default Products;