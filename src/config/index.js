import axios from "axios";

const localURI = ``; //the Universal part of your API


export const Axios = axios.create({
    baseURL: localURI,
    withCredentials: true 
});