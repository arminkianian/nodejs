import axios, {CanceledError} from "axios";

// Creating an axios client
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //     'api-key':'...'
    // }
});

export {CanceledError};