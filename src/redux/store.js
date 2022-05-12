import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composeEnhancers);

export default store;
