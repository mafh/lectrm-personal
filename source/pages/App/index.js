// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Scheduler from 'components/Scheduler';
import Catcher from 'components/Catcher';
import { Provider } from 'components/HOC/withProfile';

const options = {
    myFirstName: 'Александр',
    myLastName:  'Гусев',
};

@hot(module)
export default class App extends Component {
    render () {
        return (
            <Catcher>
                <Provider value = { options }>
                    <Scheduler />
                </Provider>
            </Catcher>
        );
    }
}
