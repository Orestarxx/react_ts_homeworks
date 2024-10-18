interface IPost {
    userId:number;
    id:number,
    title:string;
}
interface IDataPost {
    skip:number;
    total:number;
    limit:number;
}
export type {IPost,IDataPost}