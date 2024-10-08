import React, {FC} from 'react';
import {IProduct} from "../../interfaces/productInterface";
const Product:FC<IProduct> = ({id,title,description}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
};

export default Product;