import axios from 'axios'; 
import {browserHistory} from 'react-router';

const ROOT_URL='http://localhost:4000';

export function signin({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/signin`,{email,password})
            .then(response=>{
                browserHistory.push('/feature');
            })
            .catch(()=>{

            });
    };
};