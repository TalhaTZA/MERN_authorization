import React , {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class SignIn extends Component{

    formSubmit({email,password}){
        console.log(email,password);
        this.props.signin({email,password});
    }

    renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className='alert alert-danger'>
                    <strong>OOPS! {this.props.errorMessage}</strong>
                </div>
            );
        };
    };

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
                    <input type='password' {...password} className='form-control'/>
                </fieldset>
                {this.renderAlert()}
                <button action='submit' className='btn btn-primary'>Sign In</button>
            </form>
        );
    };
}

function mapStateToProps(state){
    return {
        errorMessage: state.auth.error
    };
};

export default reduxForm({
    form:'signin',
    fields:['email','password']
},mapStateToProps,actions)(SignIn);