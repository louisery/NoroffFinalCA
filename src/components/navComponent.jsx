import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavbarComponent extends React.Component {
    render() {
        return (

            <nav className="[ navbar navbar-expand-lg navbar-dark bg-dark ]" role="navigation">
                <a className="[ navbar-brand ] [ mr-3 ]" href="#">Card Game</a>
                <button className="[ navbar-toggler ]" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content"
                    aria-expanded="false" aria-label="toggle navigation">
                    <span className="[ navbar-toggler-icon ]"></span>
                </button>

                <div className="[ collapse navbar-collapse ]" id="navbar-content">
                    <ul className="[ navbar-nav ml-auto ]">
                        <li className="[ nav-item ] [ navbar__links navbar__links--color ]">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="[ nav-item ] [ navbar__links navbar__links--color ]">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="[ nav-item ] [ navbar__links navbar__links--color ]">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}