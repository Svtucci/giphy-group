import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

import axios from 'axios'; 

const searchResult = (state = [], action) => {
    if (action.type === 'FIND_GIF_SEARCH') {
        return action.payload;
    }
    return state;
}


function* findGif(action) {
    try {
        const gif = yield axios.post("/api/search", { value: action.payload });
        console.log(gif.data.data)
        yield put({ type: 'FIND_GIF_SEARCH', payload: gif.data.data});
    } catch (error) {
        console.log(`Error in GET on index: ${error}`);
        alert('Something went wrong.');
    }
};

function* rootSaga() {
    yield takeEvery('SET_GIF_SEARCH', findGif);

};

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers(
        {
            searchResult,
            //! Add reducers here
        }
    ),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
