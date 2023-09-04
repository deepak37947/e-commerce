import axios from "axios";

export default axios.create({
    baseURL : "http://apps.codebetter.in:8082/emall/",
    headers :{
        "Content-Type": "application/json"
    }
})