import React from 'react';

export default class CardSpecificComponent extends React.Component {
    render() {
        return (
            <div className="[ row ]">
            <div className="[ cards ]">
                <div className="[ col-sm-12 ]">
                    <img src={this.props.imageUrl} className="[ img-fluid ] [ card__img ]" alt="character" />
                </div>
                <div className="[ col-sm-12 ]">
                    <h1 className="[ card__heading ]">{this.props.name}</h1>
                    <div className="[ card__info ]">
                        <p>Rarity: {this.props.rarity}</p>
                        <p>Colors: {this.props.colors}</p>
                        <p>About: {this.props.text}</p>
                        <p>Flavor: {this.props.flavor}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}