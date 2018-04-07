import axios from 'axios'; 
import {browserHistory} from 'react-router';
import {AUTH_USER} from './types';

const ROOT_URL='http://localhost:4000';

export function signin({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/signin`,{email,password})
            .then(response=>{
                dispatch({type:AUTH_USER});
                localStorage.setItem('token',response.data.token);
                browserHistory.push('/feature');
            })
            .catch(()=>{

            });
    };
};