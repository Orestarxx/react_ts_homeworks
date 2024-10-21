import React, {FC} from 'react';
import {IProduct} from "../../../models/IProduct";
import './productStyle.css'
type ProductProps ={
    product:IProduct
}
const Product:FC<ProductProps> = ({product:{id,description}}) => {
    return (
        <div className={'product'}>
                <div>{id}--</div>
            <div>{description}</div>
        </div>
    );
};

export default Product;