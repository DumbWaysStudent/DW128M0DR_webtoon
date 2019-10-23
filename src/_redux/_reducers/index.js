//combine all reducer
import { combineReducers } from 'redux';
import {manga} from './../_reducers/webtoons';

const rootReducers = combineReducers({
  manga
})

export default rootReducers