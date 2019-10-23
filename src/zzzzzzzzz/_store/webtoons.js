import {
    fetchData,
    fetchDataFullfiled,
    fetchDataRejected
} from '../_actions/webtoons'
import axios from '../utils/API'

const webtoons = () => {
    return dispatch => {
        dispatch(fetchData(true))
        axios.get(`/webtoons`)
        .then(({data}) => {
            dispatch(fetchDataFullfiled(data))
        })
        .catch( error => {
            dispatch(fetchDataRejected(error))
        })
    }
}

export default webtoons