import React , {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';

class SignUp extends Component {
    render () {
        return (
            <div>
                <h1 className = "center">Sign up</h1>
                <form>
                    <Field name = "email" label = "Email" component = {Input}/>
                </form>
            </div>
        ); 
    }
}

export default reduxForm({
    form: 'sign-up'
})(SignUp);
