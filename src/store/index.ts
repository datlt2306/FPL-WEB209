import { counterReducer } from '@/reducers/Counter';
import { legacy_createStore as createStore } from 'redux'


const store = createStore(counterReducer as any);

export default store;

