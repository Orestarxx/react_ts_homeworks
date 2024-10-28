import React, {FC} from 'react';
import {IProduct} from "../../../models/IProduct";
type ProductProps = {
    product:IProduct
}
const Product:FC<ProductProps> = ({product}) => {
    return (
        <div>
            {product.id}
        </div>
    );
};

export default Product;