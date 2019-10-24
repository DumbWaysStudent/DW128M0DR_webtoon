const initialState = {
  data : [],
  isLoading : true,
  error: null
}

export const episodes = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_EPISODES_FULFILLED':
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