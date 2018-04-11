import React , {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class SignUp extends Component{
    
    fromSubmit(props){
        console.log(props);
    }

    render() {
        const { handleSubmit, fields:{email,password,passwordConfirm} } = this.props;

        return (
        <form onSubmit={handleSubmit(this.fromSubmit.bind(this))}>
            <fieldset className='form-group'>
            <label>Email:</label>
            <input className='form-control'{...email} />
            {email.touched&&email.error&&<div className='error'>{email.error}</div>}
            </fieldset>
            <fieldset className='form-group'>
            <label>Password:</label>
            <input className='form-control' type='password' {...password} />
            {password.touched&&password.error&&<div className='error'>{password.error}</div>}
            </fieldset>
            <fieldset className='form-group'>
            <label>Password Confirm:</label>
            <input className='form-control' type='password' {...passwordConfirm} />
            {passwordConfirm.touched&&passwordConfirm.error&&<div className='error'>{passwordConfirm.error}</div>}
            </fieldset>
            <button action='submit' className='btn btn-primary'>Sign UP!</button>
        </form>
      );
    };
};

function validate(formProps){
    const error={};

    if(!formProps.email){
        error.email='Enter a email'; 
    }

    if(!formProps.password){
        error.password='Enter a password'; 
    }

    if(!formProps.passwordConfirm){
        error.passwordConfirm='Enter a conformation password'; 
    }

    if(formProps.password!=formProps.passwordConfirm){
        error.password='passwords must match';
    }

    return error;
};

export default reduxForm({
    form:'signup',
    fields:['email','password','passwordConfirm'],
    validate
})(SignUp);