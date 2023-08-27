import axiosInstance from '@config/Axios';
import { ApiPath } from '@constants/api';
import { Category } from '@models/category';

export namespace CategoryService {
  export const getCategories = async () => {
    return (await axiosInstance.get<Category[]>(ApiPath.CATEGORY.GET_CATEGORIES)).data;
  };
}
