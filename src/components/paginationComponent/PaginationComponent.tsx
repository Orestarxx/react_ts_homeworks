import {useSearchParams} from "react-router-dom";
import {FC} from "react";
import './paginationStyle.css'

type PaginProps = {
    data:{next:boolean,prev:boolean}
}
const PaginationComponent:FC<PaginProps> = ({data}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
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
    console.log(data);
    return (

        <div className="button-container">
            <button className="button-3d" onClick={prev} disabled={data.prev}>
                <div className="button-top">
                    <span className="material-icons">❮</span>
                </div>
                <div className="button-bottom"></div>
                <div className="button-base"></div>
            </button>
            <button className="button-3d" onClick={next} disabled={data.next}>
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