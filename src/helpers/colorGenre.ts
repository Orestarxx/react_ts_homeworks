

export const colorGenre = (name:string) =>{
    const genreList = document.getElementById('genreHolder') as HTMLUListElement;
    for (const genreListKey in genreList?.children) {
        if(typeof genreList?.children[genreListKey] === 'object'){
        console.log(genreList?.children[genreListKey]?.children[0].innerHTML);
        const aEl = genreList?.children[genreListKey]?.children[0] as HTMLAnchorElement;
           if(aEl?.innerHTML === name){
               aEl.style.color = 'red';
               aEl.style.borderBottom = '2px solid'
           }else{
               aEl.style.color = 'black';
               aEl.style.borderBottom = 'none'
           }

        }
    }
}