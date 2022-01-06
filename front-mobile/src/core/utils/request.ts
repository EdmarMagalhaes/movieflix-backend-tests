import axios, { Method } from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = "https://edmar-movieflix.herokuapp.com";

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
  }

export const api = axios.create({
    baseURL: "https://edmar-movieflix.herokuapp.com",

});

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
    return axios({
     method,
     url: `${BASE_URL}${url}`,
     data,
     params,
     headers
     
 });
 }

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

  export async function makePrivateRequest  ({method = 'GET', url, data, params}: RequestParams)  {
      const token = await userToken();
      const headers = {
              'Authorization': `Bearer ${token}`
          }
          console.log(token)
      return makeRequest({ method, url, data, params, headers }); 
        
    }

//  export async function getMovies() {
//      const token = await userToken();
//      const res = api.get(
//          `/movies?page=0&linesPerPage=12&direction=ASC&orderBy=title`,
//          { headers: {
//              Authorization: `Bearer ${token}`
//          },
        
//      });
//      console.log(token);
//      return res;    
  
//    }
  