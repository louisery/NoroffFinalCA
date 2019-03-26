import React from 'react';

export default class CardComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-12 ]">
                <div className="[ card ]">
                    <a href={'#/cardspecific' + this.props.id}>
                        <h1 className="[ card__heading ]">{this.props.name}</h1>
                        <img src={this.props.imageUrl} className="[ card__img ]" alt="character" />
                    </a>
                </div>
            </div>
        );
    }
}