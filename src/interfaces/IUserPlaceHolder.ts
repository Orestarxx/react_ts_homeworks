export interface IUserPlaceHolder {
    id: number;
    name: string;
    username: string;
    email: string;
    address:IAddress;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase:string;
        bs: string;
    }
}
interface IAddress {

        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }

}