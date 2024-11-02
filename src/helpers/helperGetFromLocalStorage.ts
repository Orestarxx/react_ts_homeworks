export const getFromLocalStorage = <T,> (key:string) =>{
    const object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T;
    }
    return JSON.parse(object) as T;
}