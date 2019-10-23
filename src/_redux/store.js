import { createStore } from 'redux'
import rootReducers from './_reducers'
import {middleware} from './middleware'

const store = createStore(
    rootReducers, middleware 
    
)
export default store