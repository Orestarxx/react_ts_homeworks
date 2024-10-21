import {useSearchParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {placeHolderService} from "../../services/api.jsonPlaceHolder.service";
import {IDataPost, IPost} from "../../models/IPost";
import dummyService from "../../services/api.dummyJSON.service";
import {IDataDummy, IUser} from "../../models/IUser";
import {IProduct} from "../../models/IProduct";
import './paginationStyle.css'


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const [flag, setFlag] = useState<{ nextFlag: boolean, prevFlag: boolean }>({
        nextFlag: false,
        prevFlag: false
    });
    useEffect(() => {
        let page = query.get('page');
        if (page) {
            if (window.location.href.includes('posts')) {
                placeHolderService.postsService.getPosts(+page).then((response: IDataPost & { posts: IPost[] }) => {
                    setFlag({nextFlag: response.next, prevFlag: response.prev})
                });
            } else if (window.location.href.includes('users')) {
                dummyService.users.getAllUsers(+page).then((response: IDataDummy & { users: IUser[] }) => {
                    setFlag({nextFlag: response.next, prevFlag: response.prev})
                })
            } else if (window.location.href.includes('products')) {
                dummyService.products.getAllProducts(+page).then((response: IDataDummy & { products: IProduct[] }) => {
                    setFlag({nextFlag: response.next, prevFlag: response.prev})
                })
            }

        }

    }, [query]);
    const next = () => {
        let page = query.get('page');
        if (page) {
            let pageConverted = +page;
            ++pageConverted;
            setQuery({page: pageConverted.toString()})
        }
    }
    const prev = () => {
        let page = query.get('page');
        if (page) {
            let pageConverted = +page;
            --pageConverted;
            setQuery({page: pageConverted.toString()})
        }
    }
    return (
        <div className="button-container">
            <button className="button-3d" onClick={prev} disabled={flag.prevFlag}>
                <div className="button-top">
                    <span className="material-icons">❮</span>
                </div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
            <button className="button-3d" onClick={next} disabled={flag.nextFlag}>
                <div className="button-top">
                    <span className="material-icons">❯</span>
                </div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
        </div>

    );
};

export default PaginationComponent;