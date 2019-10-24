import * as types from './../types'

const initialState = {
  data : [],
  isLoading : true,
  error: null
}

export const manga = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_ALL_FULFILLED':
          state = {
            ...state, 
            data : action.payload.data
          }
          break;
      default:
          state
          break;
  }
  return state;
}