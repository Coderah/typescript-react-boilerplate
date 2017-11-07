import * as React from 'react';

import { Button } from 'element-react';

export class AppContainer extends React.Component<{}, {}> {
    render() {
        return <div style={{height: '100vh'}}>
            Hello World!
            <Button type="primary">This is a test Button</Button>
        </div>
    }
}