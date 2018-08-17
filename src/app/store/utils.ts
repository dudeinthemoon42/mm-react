// import { compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
BAD PRACTICE - DO NOT DO THIS
*/
// export const composeEnhancers =
// (process.env.NODE_ENV === 'development' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// compose;

export const composeEnhancers = composeWithDevTools;