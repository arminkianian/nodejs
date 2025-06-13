import axios from "axios";

// Create an axios instance
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4f69e57549024b33863f9b91a328f3aa',
    }
});