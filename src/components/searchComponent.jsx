import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleCharacterSearchTerm = this.handleCharacterSearchTerm.bind(this);
    }

    handleCharacterSearchTerm() {
        const app = this;
        let phrase = app.refs.searchTerm.value;
        app.props.onSearchTerm(phrase);
    }

    render() {
        const app = this;

        return (
            <div className="[ mb-4 ]">
                <input type="text"
                    class="[ form-control ]"
                    placeholder="Search for a Character"
                    aria-label="Search"
                    ref="searchTerm"
                    onChange={app.handleCharacterSearchTerm} />
</div>
                );
            }
        }
        
        
        
