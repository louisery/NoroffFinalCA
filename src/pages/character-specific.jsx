import React from 'react';
import CardSpecificComponent from '../components/cardSpecificComponent';

export default class CardSpecific extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            characterObj: [],
            characterId: this.props.match.params.id
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards?page=100'+app.state.characterId)
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                characterObj: result.card
            })

            console.log(result, 'result')
        });
    }

    render() {
        const app = this;
        let specificCharacter = <CardSpecificComponent image={app.state.characterObj.image}
        name={app.state.characterObj.name}
        rarity={app.state.characterObj.rarity}
        colors={app.state.characterObj.colors}
        >
        </CardSpecificComponent>;
        return (
                <div className="[ row ]">
                    <div className="[ col-sm-12 ]">
                        {specificCharacter}
                    </div>
                </div>
        );
    }
}