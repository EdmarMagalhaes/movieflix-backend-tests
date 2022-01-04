import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userToken } from './auth';


export const api = axios.create({
    baseURL: "https://edmar-movieflix.herokuapp.com",

});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";




export async function getMovies() {
    const token = await userToken();
    const res = api.get(
        `/movies?page=0&linesPerPage=12&direction=ASC&orderBy=title`,
        { headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return res;    

}