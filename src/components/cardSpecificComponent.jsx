import React from 'react';

export default class CardSpecificComponent extends React.Component {
    render() {
        return (
            <div className="[ row ]">
                <div>
                    <div className="[ col-xs-12 col-sm-4 ]">
                        <img src={this.props.image} className="[ img-fluid ] [ character__img ]" alt="{this.props.name}" />
                    </div>
                </div>
                <div className="[ col-xs-12 col-sm-6 ] [ col-centered ]">
                    <div className="[ character__info ]">
                        <h1 className="[ character__heading ]">{this.props.name}</h1>
                        <p>About: {this.props.about}</p>
                        <p>Rarity: {this.props.rarity}</p>
                        <p>Colors: {this.props.colors}</p>
                    </div>
                </div>
            </div>
        );
    }
}