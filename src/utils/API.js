import axios from "axios";

export default axios.create({
  baseURL: 'http://192.168.1.64:9090/api/v1'
});