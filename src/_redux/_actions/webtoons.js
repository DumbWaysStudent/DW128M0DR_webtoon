import * as types from './../types'
import axios from 'axios'

export const pandingGetWebtoons = bool => ({
  type:types.GET_ALL_PANDING,
  payload: bool
})

export const handleGetWebtoons = () => ({
  type: "GET_ALL",
  payload: axios.get(`http://192.168.1.64:9090/api/v1/webtoons`)
})