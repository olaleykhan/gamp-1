import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/index.js';

let middleware;

if (process.env.NODE_ENV === 'development') {
	middleware = compose(
		applyMiddleware(thunk)
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
} else {
	middleware = compose(applyMiddleware(thunk));
}

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);
