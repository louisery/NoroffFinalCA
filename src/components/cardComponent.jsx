import React from 'react';

export default class CardComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ]">
                <div className="[ card ]">
                    <h2 className="[ card__heading ]">{this.props.name}</h2>
                    <a href={'#/character-specific/' + this.props.id} >
                        <div className="[ card__overlay ]">
                            <img src={this.props.image} className="[ img-fluid ] [ card__img ]" alt="character card" />
                            <div className="[ card__overlay-text ]">
                                <button className="[ btn ] [ card__overlay-btn">Read More</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}