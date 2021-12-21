import axios from 'axios';

export const api = axios.create({
    baseURL: "https://edmar-movieflix.herokuapp.com",

});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";