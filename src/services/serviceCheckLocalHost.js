import { CORS_ANYWHERE } from '../utils/config'

export const serviceCheckLocalHost = () => {
  return (window.location.href.match('https:') || []).length === 0 ?
    CORS_ANYWHERE : ''
}