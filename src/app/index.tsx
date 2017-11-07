import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import routes from './routes';

// import './index.scss';
import 'element-theme-default';

const rootEl = document.getElementById('root');

function renderApp(child: typeof routes) {
    ReactDOM.render(
        <AppContainer>
            <Router>
                { child }
            </Router>
        </AppContainer>
    , rootEl);
}

renderApp(routes);

if (module.hot) {
    module.hot.accept('./routes', () => renderApp(routes));
}