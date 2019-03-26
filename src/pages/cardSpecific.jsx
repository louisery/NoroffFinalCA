import React from 'react';
import CardSpecificComponent from './../components/cardSpecificComponent';

export default class CardSpecific extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characterObj: [],
            characterID: this.props.match.params.id
        }
    }

    componentDidMount() {
        const app = this;
        app.getData();
    }

    getData() {
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards?page=100' + app.state.characterID)
            .then(response => {
                return response.json()
            })
            .then(result => {
                app.setState({
                    characterObj: result.card
                })
            });
    }

    render() {
        const app = this;

        let specificCard = <CardSpecificComponent
            imageURL={app.state.characterObj.imageURL}
            name={app.state.characterObj.name}
            rarity={app.state.characterObj.rarity}
            colors={app.state.characterObj.colors}
            text={app.state.characterObj.text}
            flavor={app.state.characterObj.flavor}
        />;

        return (
            <div className="[ row ]">
                <div className="[ col-sm-12 ]">
                {specificCard}
                </div>
            </div>
        );
    }
}
