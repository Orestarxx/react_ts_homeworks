export interface ITokenPair {
	accessToken: string;
	refreshToken: string;
}
export interface ILogin {
    username:string;
    password:string;
    expiresInMins?:number
}
export interface IData {
    total:number;
    skip:number;
    limit:number;
}