import axios from "axios";
import {IDataDummy, IUser} from "../models/IUser";
import {IProduct} from "../models/IProduct";


export const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{'Content-Type':'application/json'}
});

const dummyService = {
    users: {
        getAllUsers: async (page: number): Promise<IDataDummy & { users: IUser[] }> => {
            const skip = (page - 1) * 20;
            let limit = 20;

            const data = await axiosInstance.get<IDataDummy & { users: IUser[] }>('/users', {
                params: {
                    skip: skip,
                    limit: limit

                }
            });
            let dataUsers: IDataDummy & { users: IUser[] } = {
                limit: data.data.limit,
                skip: data.data.skip,
                total: data.data.total,
                users: data.data.users,
                next: false,
                prev: false
            }
            if (dataUsers.users.length) {
                let lastId = dataUsers.users[dataUsers.users?.length - 1]?.id;
                dataUsers.next = lastId === dataUsers.total ? true : false;
                dataUsers.prev = page > 1 ? false : true;
            }
            return dataUsers;
        }
    },
    products: {
        getAllProducts: async (page: number): Promise<IDataDummy & { products: IProduct[] }> => {
            let skip = (page - 1) * 20;
            let limit = 20;

            const data = await axiosInstance.get<IDataDummy & { products: IProduct[] }>('/products', {
                params: {
                    limit: limit,
                    skip: skip
                }
            });
            let dataProducts: IDataDummy & { products: IProduct[] } = {
                skip: skip,
                limit: data.data.limit,
                total: data.data.total,
                products: data.data.products,
                next: false,
                prev: false
            }

            if (dataProducts.products.length) {
                let lastId = dataProducts.products[dataProducts.products?.length - 1]?.id;
                dataProducts.next = lastId === dataProducts.total ? true : false;
                dataProducts.prev = page > 1 ? false : true;
            }

            return dataProducts
        }
    }
}
export default dummyService;