import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers } from './utils';

import rootReducer from './rootReducers';

export const configureStore = (initialState?: object) => {

    const middlewares: any[] = [];
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(
        rootReducer,
        initialState!,
        enhancer);

    return store;
}