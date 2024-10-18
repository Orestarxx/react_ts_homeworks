import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {placeHolderService} from "../../services/api.jsonPlaceHolder.service";
import {IDataPost, IPost} from "../../models/IPost";


const PaginationComponent = () => {
 const [query,setQuery] = useSearchParams({skip:'1'});
 const [total,setTotal] = useState<IDataPost & {posts:IPost[]}>(
     {
         skip:0,
         limit:0,
         total:100,
         posts:[]
     });
 useEffect(() =>{
     const page = query.get('skip');
     if(page){
     placeHolderService.postsService.getPosts(+page).then((response:IDataPost & {posts:IPost[]}) =>{setTotal(response)})
     }

 },[query]);

    const next = () =>{
  let page = query.get('skip');
 if(total?.total && total?.posts){
     const lastIndex = total.posts[total.posts.length-1].id;
     console.log(lastIndex);

     if(page && lastIndex < total.total){
         let pageConverted = +page;
         ++pageConverted;
         setQuery({skip:pageConverted.toString()})
     }
 }
   }
   const prev = () =>{
       let page = query.get('skip');
       if(page && +page > 1 ){
           let pageConverted = +page;
           --pageConverted;
           setQuery({skip:pageConverted.toString()})
       }
   }
    return (
        <div>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    );
};

export default PaginationComponent;