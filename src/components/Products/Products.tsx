import React, {FC} from 'react';
import {products} from "../../data";
import {IProduct} from "../../interfaces/productInterface";
import Product from "./Product";
const Products:FC = () => {
    return (
        <div>
            {products.map(({title,description,id}:IProduct) =><Product key={id}
                                                                       title={title}
                                                                       description={description}
                                                                       id={id} />)}

        </div>
    );
};

export default Products;