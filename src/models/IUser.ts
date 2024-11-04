export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}
export interface IAddressGeo {
	lat: string;
	lng: string;
}
export interface IAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IAddressGeo;
}
export interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}