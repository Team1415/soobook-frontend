import axiosInstance from '@/config/Axios';
import { ApiPath } from '@constants/api';
import { Hashtag } from '@models/hashtag';

export namespace HashtagService {
  export const getHashtags = async () => {
    return (await axiosInstance.get<Hashtag[]>(ApiPath.HASHTAG.GET_HASHTAGS)).data;
  };
}
