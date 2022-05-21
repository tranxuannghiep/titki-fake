import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer', 'userReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(persistedReducer, composeEnhancers);

export default store;
export const persistor = persistStore(store);
