import {
    combineReducers,
    createStore,
    Store,
    Dispatch,
    MiddlewareAPI,
    Middleware,
    Action,
    applyMiddleware,
} from 'redux';
import calcReducer from './reducers/calcReducer';

const rootReducer = combineReducers({
    calcReducer
});

// middleware for testing
const logger: Middleware<Dispatch> = (store: MiddlewareAPI) => next => (action: Action) => {
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export function configureStore(): Store {
    return createStoreWithMiddleware(rootReducer);
}

export default configureStore;