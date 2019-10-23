import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import webtoons from '../_reducers/webtoons'

const rootReducers = combineReducers({
    webtoons
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store