import { REACT_APP_API_HOST, REACT_APP_API_KEY } from '../utils/config'
import axios from 'axios'

export const serviceGetVideoList = async (key, keyword) => {
  console.log(REACT_APP_API_KEY, REACT_APP_API_HOST)
  const { data } = await axios.get(`${REACT_APP_API_HOST}`, {
    params:{
      part: keyword,
      key: REACT_APP_API_KEY,
    }
  });
  return data;
}