import React , {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class SignIn extends Component{

    formSubmit({email,password}){
        console.log(email,password);
        this.props.signin({email,password});
    }

    render(){

        const {fields:{ email , password } , handleSubmit } = this .props;

        return(
            <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <input {...email} className='form-control'/>
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <input {...password} className='form-control'/>
                </fieldset>
                <button action='submit' className='btn btn-primary'>Sign In</button>
            </form>
        );
    };
}


export default reduxForm({
    form:'signin',
    fields:['email','password']
},null,actions)(SignIn);