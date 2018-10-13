import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux'; //glue between react and redux
import {createStore} from 'redux';
import reducers from './reducers';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>

            </View>
        </Provider>
    );
};

export default App;
