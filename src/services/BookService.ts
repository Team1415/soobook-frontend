import axiosInstance from '@/config/Axios';
import { ApiPath } from '@constants/api';
import { Book } from '@models/book';

export namespace BookService {
  export const getNewestBooks = async () => {
    return (await axiosInstance.get<Book[]>(ApiPath.BOOK.GET_NEWEST)).data;
  };
}
