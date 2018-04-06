import axios from 'axios'; 

const ROOT_URL='http://localhost:4000';

export function signin({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/signin`,{email,password});
    };
};