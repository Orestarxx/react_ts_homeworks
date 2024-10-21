import React, {useEffect, useState} from 'react';
import dummyService from "../../../services/api.dummyJSON.service";
import {IDataDummy} from "../../../models/IUser";
import {IProduct} from "../../../models/IProduct";
import Product from "../product/Product";
import PaginationComponent from "../../paginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import './productsStyle.css'

const Products = () => {
    const [products, setProducts] = useState<IDataDummy & {products:IProduct[]}>({
        skip:0,
        total:0,
        limit:0,
        products:[],
        next:false,
        prev:false
    });
    const [query] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page');
        if (page) {
            dummyService.products.getAllProducts(+page).then((response: IDataDummy & { products: IProduct[] }) => {
                setProducts(response)
            })
        }
    }, [query]);
    return (
        <div id={'infoProductsHolder'}>
            <div>{products.products.map((product: IProduct) => <Product key={product.id} product={product}/>)}</div>
            <hr/>
            <PaginationComponent products={products}/>
        </div>
    );
};

export default Products;