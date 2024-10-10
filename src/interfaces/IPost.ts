export interface IPost {
    body:string;
    id: number;
    reactions: {likes: number, dislikes: number};
    tags:string[];
    title:string;
    userId:number;
    views:number;
}

export interface IDataPost {
    posts:IPost[];
    limit:number;
    skip:number;
    total:number;
}