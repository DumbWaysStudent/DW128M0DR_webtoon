import axios from '../../utils/API'

// handle webtoons secara global
export const handleGetWebtoons = () => ({
  type: "GET_ALL",
  payload: axios.get(`/webtoons`)
})

// handle episodes
export const handleGetEpisodes = id => ({
  type: "GET_EPISODES",
  payload: axios.get(`/webtoon/${id}/episodes`)
})

// handle page
export const handleGetPages = (webtoon_id, detail_id) => ({
  type: "GET_PAGES",
  payload: axios.get(`/webtoon/${webtoon_id}/episode/${detail_id}`)
})