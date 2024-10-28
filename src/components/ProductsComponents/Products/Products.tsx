import React, {useEffect, useState} from 'react';
import {dummyService} from "../../../services/api.dummy.service";
import {refresh} from "../../../services/api.dummy.service"
import {IData, ITokenPair} from "../../../models/IDataDummy";
import {IProduct} from "../../../models/IProduct";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState<IData & {products:IProduct[]} | null>(null);
    useEffect(() => {
        dummyService.get.getAllProducts()
            .then((response:IData & {products:IProduct[]}) =>setProducts(response))
            .catch(reason =>{
                console.log(reason);
                refresh().then((response:ITokenPair) =>
                    dummyService.get.getAllProducts().then((response:IData & {products:IProduct[]})=>setProducts(response)))
            })
    }, []);
    console.log(products);
    return (
        <div>
            {products?.products.map((product:IProduct) =><Product key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;