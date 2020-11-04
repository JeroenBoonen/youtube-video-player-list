import YoutubeAPI from './serviceYoutubeAPI'

/**
 * 
 * @param {String} keyword 
 * @returns {Object}
 */
export const serviceGetVideoList = async keyword => {
  if(keyword === undefined || keyword === "")return {}

  // Get Video Data from YoutubeAPI
  const response = await YoutubeAPI.get('/search', {
    params: {
      q: keyword
    }
  })

  // Check if item has videoId or channelId
  const item = response.data.items.filter(item => item.id.hasOwnProperty('videoId'))[0]

  return {
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    channelTitle: item.snippet.channelTitle
  }
}
