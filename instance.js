import axios from "axios";
const instance=axios.create({
    baseURL:'http://localhost:5000/api/Case',
    withCredentials:true,
    headers:{
        accept:'application/json'
    }
})

export default {instance}