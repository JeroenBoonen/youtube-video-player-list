import { useQuery } from "react-query";
import { serviceGetVideoList } from '../../../services/serviceGetVideoList';

export function useYoutubeAPI({ keyword }) {
  return useQuery('video', () => serviceGetVideoList(keyword))
}