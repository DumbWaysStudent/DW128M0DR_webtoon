import axios from "axios";

export default axios.create({
  // baseURL: 'https://glacial-garden-94710.herokuapp.com/api/v1/'
  baseURL: 'http://192.168.1.64:9090/api/v1'
});