import React from 'react';

/** Source 
 * https://www.youtube.com/watch?v=4CeTFW4agRw
 * Followed this Youtube tutorial for form validation
 */

const emailRegex = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === '' && (valid = false);
    });

    return valid;
};

export default class ContactComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFirstName: '',
            inputLastName: '',
            inputPhone: '',
            inputEmail: '',
            formErrors: {
                inputFirstName: '',
                inputLastName: '',
                inputPhone: '',
                inputEmail: ''
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            --Submitted Contact Form--
            First Name: ${this.state.inputFirstName}
            Last Name: ${this.state.inputLastName}
            Phone: ${this.state.inputPhone}
            Email: ${this.state.inputEmail}
          `);
        } else {
            console.error('Invalid Form');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'inputFirstName':
                formErrors.inputFirstName =
                    value.length < 2 ? 'Minimum 2 characters required' : '';
                break;
            case 'inputLastName':
                formErrors.inputLastName =
                    value.length < 2 ? 'Minimum 2 characters required' : '';
                break;
            case 'inputPhone':
                formErrors.inputPhone = phoneRegex.test(value)
                    ? ''
                    : 'Number format: xxx xxx xxxx, xxx-xxx-xxxx or xxx.xxx.xxxx'
                break;
            default:
                break;
            case 'inputEmail':
                formErrors.inputEmail = emailRegex.test(value)
                    ? ''
                    : 'Invalid email address';
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="[ row ]">
                <div className="[ col-sm-6 ] [ col-centered ]">
                    <h1>Contact Us</h1>
                    <form className="[ form ]" onSubmit={this.handleSubmit} noValidate>
                        <div className="[ form-group ]">
                            <label htmlFor="inputFirstName">First Name:</label>
                            <input
                                type="text"
                                name="inputFirstName"
                                placeholder="Enter First Name"
                                className={`[ form-control ] [ ${formErrors.inputFirstName.length > 0 ? 'form-invalid' : ''} ]`}
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.inputFirstName.length > 0 && (
                                <span className="[ form__error ]"><i>{formErrors.inputFirstName}</i></span>
                            )}
                        </div>
                        <div className="[ form-group ]">
                            <label htmlFor="inputLastName">Last Name:</label>
                            <input
                                type="text"
                                name="inputLastName"
                                placeholder="Enter Last Name"
                                className={`[ form-control ] [ ${formErrors.inputLastName.length > 0 ? 'form-invalid' : ''} ]`}
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.inputLastName.length > 0 && (
                                <span className="[ form__error ]"><i>{formErrors.inputLastName}</i></span>
                            )}
                        </div>
                        <div className="[ form-group ]">
                            <label htmlFor="inputPhone">Phone:</label>
                            <input
                                type="phone"
                                name="inputPhone"
                                placeholder="Enter Phone Number"
                                className={`[ form-control ] [ ${formErrors.inputPhone.length > 0 ? 'form-invalid' : ''} ]`}
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.inputPhone.length > 0 && (
                                <span className="[ form__error ]"><i>{formErrors.inputPhone}</i></span>
                            )}
                        </div>
                        <div className="[ form-group ]">
                            <label htmlFor="inputEmail">Email:</label>
                            <input
                                type="email"
                                name="inputEmail"
                                placeholder="Enter Email Address"
                                className={`[ form-control ] [ ${formErrors.inputEmail.length > 0 ? 'form-invalid' : ''} ]`}
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.inputEmail.length > 0 && (
                                <span className="[ form__error ]"><i>{formErrors.inputEmail}</i></span>
                            )}
                        </div>
                        <div className="[ text-center ]">
                            <button type="submit" class="[ btn ] [ form__button ]">Submit <i class="far fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}