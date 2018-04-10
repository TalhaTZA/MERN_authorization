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
            </fieldset>
            <fieldset className='form-group'>
            <label>Password:</label>
            <input className='form-control' type='password' {...password} />
            </fieldset>
            <fieldset className='form-group'>
            <label>Password Confirm:</label>
            <input className='form-control' type='password' {...passwordConfirm} />
            </fieldset>
            <button action='submit' className='btn btn-primary'>Sign UP!</button>
        </form>
      );
    };
};

export default reduxForm({
    form:'signup',
    fields:['email','password','passwordConfirm']
})(SignUp);