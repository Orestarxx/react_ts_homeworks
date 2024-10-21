import React, {useEffect, useState} from 'react';
import dummyService from "../../../services/api.dummyJSON.service";
import {IDataDummy} from "../../../models/IUser";
import {IProduct} from "../../../models/IProduct";
import Product from "../product/Product";
import PaginationComponent from "../../paginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import './productsStyle.css'

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [query] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page');
        if (page) {
            dummyService.products.getAllProducts(+page).then((response: IDataDummy & { products: IProduct[] }) => {
                setProducts(response.products)
            })
        }
    }, [query]);
    return (
        <div id={'infoProductsHolder'}>
            <div>{products.map((product: IProduct) => <Product key={product.id} product={product}/>)}</div>
            <hr/>
            <PaginationComponent/>
        </div>
    );
};

export default Products;