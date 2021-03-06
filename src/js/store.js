import { createStore } from 'redux';
import reducer from './reducers/reducer';

export default function configureStore(initialState) {
    return createStore(reducer, initialState);
}
