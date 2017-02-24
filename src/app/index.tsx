import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

import './index.scss';

ReactDOM.render(<Router history={browserHistory}>
    {routes}
</Router>, document.getElementById('root'));