export interface ILoginUserResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
}
export interface IDataUserLogin {
    username:string;
    password:string;
    expiresInMins?:number;
}
export interface IRefreshResponse {
    accessToken:string;
    refreshToken:string;
}