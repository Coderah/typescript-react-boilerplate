import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import {AppContainer} from 'react-hot-loader';

import routes from './routes';

import './index.scss';

const rootEl = document.getElementById('root');

function renderApp(child: typeof routes) {
    ReactDOM.render(
        <AppContainer>
            <Router history={browserHistory}>
                {child}
            </Router>
        </AppContainer>
    , rootEl);
}

renderApp(routes);

if (module.hot) {
    module.hot.accept('./routes', () => renderApp(routes));
}