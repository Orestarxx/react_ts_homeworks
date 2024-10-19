import {useSearchParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {placeHolderService} from "../../services/api.jsonPlaceHolder.service";
import {IDataPost, IPost} from "../../models/IPost";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const [flag, setFlag] = useState<{ nextFlag: boolean, prevFlag: boolean }>({
        nextFlag: false,
        prevFlag: false
    });
    useEffect(() => {
        const page = query.get('page');
        if (page) {
            placeHolderService.postsService.getPosts(+page).then((response: IDataPost & { posts: IPost[] }) => {
                setFlag({nextFlag: response.next, prevFlag: response.prev})

            });
        }

    }, [query]);
    console.log(flag);

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
        <div>
            <button onClick={prev} disabled={flag.prevFlag}>prev</button>
            <button onClick={next} disabled={flag.nextFlag}>next</button>
        </div>
    );
};

export default PaginationComponent;