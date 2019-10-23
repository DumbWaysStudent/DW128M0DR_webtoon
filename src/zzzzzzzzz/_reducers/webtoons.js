import {
GET_ALL_PENDING,
GET_ALL_FULFILLED,
GET_ALL_REJECTED
} from '../utils/reduxType'

const initiateState = {
    data : [],
    error: null,
    loading: false
}

const webtoons = (state = initiateState, action) => {
    // console.log(action, '====> webtoon reducer')
    switch (action.type) {
        case "GET_ALL_PENDING":
            return {
                ...state,
                error: null,
                loading:true
            }
        case "GET_ALL_FULFILLED":
            console.log(action.payload)
            return {
                ...state,
                data:action.payload.data,
                loading: false
            }
        case "GET_ALL_REJECTED":
            return {
                ...state,
                error:true,
                loading:false
            }
        default:
            return state
    }
}

export default webtoons