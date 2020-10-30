import axios from 'axios'
import { serviceCheckLocalHost } from './serviceCheckLocalHost'
import { API_HOST, API_KEY } from '../utils/config'

export default axios.create({
    baseURL: `${serviceCheckLocalHost()}${API_HOST}`,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }    
})
