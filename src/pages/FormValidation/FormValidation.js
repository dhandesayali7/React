import React from 'react';
import { FormErrors } from './FormErrors';

class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '', 
            password: '', 

            emailaddressValid: false, 
            passwordValid: false, 
            formValid: false, 

            formErrors: {
                emailAddress: "", 
                password: ""
            }
        }
    }

    handleUserInput = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value; 

        this.setState({[fieldName]: fieldValue}, 
            () => {this.validateField(fieldName, fieldValue)})
    }

    validateField(fieldName, fieldValue) {
        let fieldValidationErrors = this.state.formErrors;
        let emailaddressValid = this.state.emailaddressValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case "emailAddress": 
                emailaddressValid = fieldValue.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
                fieldValidationErrors.emailAddress = emailaddressValid ? "" : " is invalid!";
                break;

            case "password": 
                passwordValid = fieldValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
                fieldValidationErrors.password = passwordValid ? "" : " is wrong!";
                break;

            default: 
                break;
        }

        this.setState({formErrors: fieldValidationErrors, emailaddressValid: emailaddressValid, passwordValid: passwordValid}, this.validForm);
    }

    validForm() {
        this.setState({
            formValid: this.state.emailaddressValid && this.state.passwordValid
        })
    }


    render() {
        return(
        <div className="row">
            <div className="col-sm-12 main__content">
                <h3>Form Validation</h3>

                <hr />

                <form>

                    <div className='form-group row'>
                        <div className='col-12'>
                            <FormErrors formErrors = {this.state.formErrors} />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4 text-sm-end'>Email Address</label>
                        <div className='col-6'>
                            <input type='text' name='emailAddress' value={this.state.emailAddress} placeholder='ex., john@gmail.com' className='form-control' onChange={this.handleUserInput} />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4 text-sm-end'>Password</label>
                        <div className='col-6'>
                            <input type='text' name='password' value={this.state.password} placeholder='ex., j0hN123' className='form-control' onChange={this.handleUserInput} />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6 offset-4'>
                            <input type='submit' className='btn btn-primary' value='submit' disabled = {!this.state.formValid} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default FormValidation;