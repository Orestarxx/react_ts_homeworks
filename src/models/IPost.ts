interface IPost {
    userId:number;
    id:number,
    title:string;
}
interface IDataPost {
    skip:number;
    total:number;
    limit:number;
    next:boolean
    prev:boolean
}
export type {IPost,IDataPost}