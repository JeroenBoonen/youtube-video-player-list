import { useEffect, useState } from 'react'
import { serviceGetVideoList } from '../../../services/serviceGetVideoList';

/**
 * Fetching video data from youtube api with keyword
 * @param {String} keyword 
 */
export function useYoutubeAPI(keyword) {  
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const process = async() => {
      setFetching(true)
      try {
        const data = await serviceGetVideoList(keyword)      
        setData(data)
      } catch (e) {
        setError(e)
      }
      setFetching(false)
      return () => {
        setData(null)
        setError(null)
      }
    }
    process()    
  }, [keyword])
  
  return [data, fetching, error]
}