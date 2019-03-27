import React from 'react';
import Search from './../components/searchComponent';
import CardComponent from '../components/cardComponent';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterObj: [],
            characterCards: [],
            characterSearch: [] //Added to fix search bug 
        }
        this.getData = this.getData.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
    }

    componentDidMount() {
        const app = this;
        app.getData();
    }

    getData() {
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards?page=100')
            .then(response => {
                return response.json()
            })
            .then(result => {
                app.setState({
                    characterSearch: result.cards,
                    characterObj: result.cards
                });
            });
    }

    handleSearchTerm(searchTerm) {
        const app = this;
        let characterObj = app.state.characterSearch;
        let characters = characterObj.filter((character) =>
            character.name.toLowerCase().includes(searchTerm)); //Added to fix search bug (do not need to use uppercase)

        app.setState({
            characterCards: [],
            characterObj: characters
        }, app.createCards());
    }

    createCards() {
        const app = this;
        let characterArray = app.state.characterObj;
        characterArray.forEach((value, key) => {
            app.state.characterCards.push(
                <CardComponent
                    imageUrl={value.imageUrl}
                    name={value.name}
                    rarity={value.rarity}
                    id={value.id}
                    key={key}
                />    
            );
        });
    }

    render() {
        const app = this;
        app.createCards();
        return (
            <div className="[ row ]">
            <div className="[ col-sm-8 ] [ search ]">
            <Search onSearchTerm={app.handleSearchTerm}></Search>
            </div>
            <div className="[ col-sm-12 ]">
            {app.state.characterCards}
            </div>
            </div>
        )
    }
}