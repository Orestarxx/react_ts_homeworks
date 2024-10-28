export const getFromLocalStorage = <T,> (key:string) =>{
    let object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T;
    }
    return JSON.parse(object) as T;
}