import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{'Content-Type':'application/json'}
});
// todo services for our pagination task;
const dummyService = {
    users:{
        getAllUsers: async () =>{
            const data = await axiosInstance.get('/users');
            console.log(data);
            return data
        }
    },
    products:{}
}
export default dummyService;