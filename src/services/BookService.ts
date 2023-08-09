import axiosInstance from '@/config/Axios';
import { ApiPath } from '@constants/api';
import { Book, BookDetail } from '@models/book';

export namespace BookService {
  export const getNewestBooks = async () => {
    return (await axiosInstance.get<Book[]>(ApiPath.BOOK.GET_NEWEST)).data;
  };

  export const getBook = async (id?: string | number) => {
    if (!id) {
      throw new Error();
    }

    return (await axiosInstance.get<BookDetail>(`${ApiPath.BOOK.GET_BOOK}${id}`)).data;
  };
}
