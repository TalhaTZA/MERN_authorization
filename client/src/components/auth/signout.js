import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class SignOut extends Component{
    componentWillMount(){
        this.props.signoutUser();
    };

    
    render() {
        return (
            <div>
                Sorry to see you leave.....
            </div>
        )
    };
    
};

export default connect(null,actions)(SignOut);