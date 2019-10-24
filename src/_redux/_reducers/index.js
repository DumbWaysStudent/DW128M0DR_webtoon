//combine all reducer
import { combineReducers } from 'redux'
import {manga} from './../_reducers/webtoons'
import {episodes} from './../_reducers/episodes'
import {pages} from './../_reducers/pages'


const rootReducers = combineReducers({
  manga,
  episodes,
  pages
})

export default rootReducers