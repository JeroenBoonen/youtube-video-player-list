import YoutubeAPI from './serviceYoutubeAPI'

export const serviceGetVideoList = async (key, keyword) => {
  const response = await YoutubeAPI.get('/search', {
    params: {
      q: keyword
    }
  })
  return {
    id: response.data.items[0].id.videoId,
    title: response.data.items[0].snippet.title,
    description: response.data.items[0].snippet.description,
    channelTitle: response.data.items[0].snippet.channelTitle
  }
}
