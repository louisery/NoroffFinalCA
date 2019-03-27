import React from 'react';

export default class CardComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ]">
                <div className="[ card ]">
                    <a href={'#/cardspecific' + this.props.id}>
                        <h2 className="[ card__heading ]">{this.props.name}</h2>
                        <img src={this.props.imageUrl} className="[ img-fluid ] [ card__img ]" alt="character" />
                    </a>
                </div>
            </div>
        );
    }
}