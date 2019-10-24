const initialState = {
    data : [],
    isLoading : true,
    error: null
  }
  
  export const pages = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PAGES_FULFILLED':
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