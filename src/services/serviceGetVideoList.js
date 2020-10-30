import { API_HOST } from '../utils/config'
import axios from 'axios'

export const serviceGetVideoList = async (keyword, params) => {
  const { data } = await axios.get(`${API_HOST}/search/list`);
  return data;
}