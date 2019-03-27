import 'styles/app.scss';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/app/app';
import Homepage from './pages/homepage';
import CardSpecific from './pages/cardSpecific';
import About from './components/aboutComponent';
import Contact from './components/contactComponent';


const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={Homepage} />
                <Route path="/cardspecific/:id" component={CardSpecific} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(render);
}
