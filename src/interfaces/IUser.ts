export  interface IUser {
    id:number;
    firstName: string;
    lastName: string;
    maidenName: string
    age: string;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: string;
    weight: string
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    },
    ip: string;
    address:IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company:ICompany;
    ein: string;
    ssn: string
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    },
    role: string;
}
interface IAddress {

    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
    lat: number;
        lng: number;
},
    country: string;
}
interface IBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
interface ICompany  {
    department: string;
    name: string;
    title: string;
    address:IAddress;
}

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

export interface IDataUser {
    limit:number;
    skip:number;
    total:number;
    users:IUser[];
}