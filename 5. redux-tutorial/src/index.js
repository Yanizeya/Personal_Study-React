import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import indexReducer from './modules/indexReducer';

const store = createStore(indexReducer, composeWithDevTools());

ReactDom.render(
    <Provider store={store}>
        {/* BrowserRouter를 사용할 경우 프로그래밍 되는 위치 */}
        <App />
    </Provider>, 
    document.querySelector('#root')
);