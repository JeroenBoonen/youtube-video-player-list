import { CORS_ANYWHERE } from '../utils/config'

/**
 * Use heroku corsanywhere to avoid cors issue on local environment
 * @returns {String}
 */
export const serviceCheckLocalHost = () => {
  return (window.location.href.match('https:') || []).length === 0 ?
    CORS_ANYWHERE : ''
}