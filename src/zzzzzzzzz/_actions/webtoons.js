import {
    GET_ALL_PENDING,
    GET_ALL_FULFILLED,
    GET_ALL_REJECTED,
} from '../utils/reduxType'
import axios from '../utils/API'

export const fetchData = () => {
    return {
        type: "GET_ALL",
        payload: axios.get(`/webtoon`)
    }
}

// export const fetchDataFullfiled = data => {
//     return {
//         type: GET_ALL_FULFILLED,
//         payload: data,
//         loading: false
//     }
// }

// export const fetchDataRejected = error => {
//     return {
//         type: GET_ALL_REJECTED,
//         payload: error,
//         loading: false
//     }
// }