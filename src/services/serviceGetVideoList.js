import axios from 'axios'
import { serviceCheckLocalHost } from './serviceCheckLocalHost'
import { API_HOST, API_KEY } from '../utils/config'

export const serviceGetVideoList = async (key, keyword) => {
  const { data } = await axios.get(`${serviceCheckLocalHost()}${API_HOST}`, {
    params:{
      part: keyword,
      key: API_KEY,
    }
  });
  return data;
}
