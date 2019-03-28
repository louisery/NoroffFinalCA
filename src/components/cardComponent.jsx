import React from 'react';

export default class CardComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ]">
                <div className="[ card ]">
                <h2 className="[ card__heading ]">{this.props.name}</h2>
                    <a href={'#/character-specific/'+this.props.id} >
                            <img src={this.props.image} className="[ img-fluid ] [ card__img ]" alt="character card" />
                    </a>
                </div>
            </div>
        );
    }
}