import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
    appReducers, //redux developeer tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.
		__REDUX_DEVTOOLS_EXTENSION__()
);

//khai báo provider cấp store cho thằng app
ReactDOM.render(
    <Provider store = {store}> 
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
