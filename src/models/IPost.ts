import {IComment} from "./IComment";

export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
	comments?:IComment[]
}