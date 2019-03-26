import React from 'react';
import NavbarComponent from './../navComponent';

export default class Layout extends React.Component {
    render() { 
        return (
            <div>
                <NavbarComponent />
                <div className="[ container ]">
                    <div className="[ row ]">
                        <div className="[ col-sm-12 ]">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
