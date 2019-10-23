import * as types from './../types'

const initialState = {
  data : [],
  isLoading : true
}

export const manga = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_MANGA':
          state
          break; 
      case 'GET_MANGA_FULFILLED':
          state = {...state, data : action.payload.data}
          break;
      default:
          state
          break;
  }
  return state;
}