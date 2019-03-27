import React from 'react';

export default class CardSpecificComponent extends React.Component {
    render() {
        return (
            <div className="[ row ]">
            <div className="[ card ]">
                <div className="[ col-sm-4 ]">
                    <img src={this.props.imageUrl} className="[ card__img ]" alt="character" />
                </div>
                <div className="[ col-sm-6 ]">
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