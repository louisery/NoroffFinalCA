import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    render() {
        return (
            <nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        )
    }
}