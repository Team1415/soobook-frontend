import axiosInstance from '@/config/Axios';
import { ApiPath } from '@constants/api';
import { Hashtag } from '@models/hashtag';

export namespace HashtagService {
  export const getPopularHashtags = async (categoryId: number) => {
    return (
      await axiosInstance.get<Hashtag[]>(ApiPath.HASHTAG.GET_HASHTAGS, {
        params: { sort: 'popular', category: categoryId },
      })
    ).data;
  };

  export const getHashtags = async (categoryId: number) => {
    return (
      await axiosInstance.get<Hashtag[]>(ApiPath.HASHTAG.GET_HASHTAGS, {
        params: { category: categoryId },
      })
    ).data;
  };
}
