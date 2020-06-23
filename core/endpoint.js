import axios from 'axios';
import User from '../user';

let http = axios.create({
    baseURL: 'https://ecis-webapi.azurewebsites.net/api/Users/' 
});

http.interceptors.request.use(requestConfig => {

    if(User.isLoggedIn())
    {
         let auth =  `Bearer ${User.getAccessToken()}` ;
        requestConfig.headers.Authorization = auth;
    }
   
    return requestConfig;
});


export default http;