import {
    fetchData,
    fetchDataFullfiled,
    fetchDataRejected
} from '../_actions/webtoons'
import axios from '../utils/API'

const listEpisodes = (webtoon_id) => {
    return dispatch => {
        dispatch(fetchData(true))
        axios.get(`/webtoon/${webtoon_id}/episodes`)
        .then(({data}) => {
            dispatch(fetchDataFullfiled(data))
        })
        .catch( error => {
            dispatch(fetchDataRejected(error))
        })
    }
}

export default listEpisodes