import React from 'react';

export default class ContactComponent extends React.Component {
    render() {
        return (
            <div className="[ row ]">
                <div className="[ col-sm-6 ] [ col-centered ]">
                    <form className="[ form ]">
                        <h2>Contact Form</h2>
                        <div className="[ form-group ]">
                            <label for="inputFirstName">First Name:</label>
                            <input type="text" className="[ form-control ]" id="firstName" placeholder="Enter First Name"></input>
                        </div>
                        <div className="[ form-group ]">
                            <label for="inputLastName">Last Name:</label>
                            <input type="text" className="[ form-control ]" id="lastName" placeholder="Enter Last Name"></input>
                        </div>
                        <div className="[ form-group ]">
                            <label for="inputTelephone">Telephone:</label>
                            <input type="number" className="[ form-control ]" id="telephone" placeholder="Enter Telephone Number"></input>
                        </div>
                        <div className="[ form-group ]">
                            <label for="inputEmail">Email:</label>
                            <input type="email" className="[ form-control ]" id="email" placeholder="Enter Email Address"></input>
                        </div>
                        <button type="submit" class="[ btn btn-primary ]">Submit <i class="far fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        );
    }
}