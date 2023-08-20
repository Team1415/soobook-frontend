import { isEmpty, join } from 'lodash-es';

import axiosInstance from '@/config/Axios';
import { ApiPath } from '@constants/api';
import { Book, BookDetail } from '@models/book';

export namespace BookService {
  export const getNewBooks = async (categoryId: number) => {
    return (
      await axiosInstance.get<Book[]>(ApiPath.BOOK.GET_BOOKS, {
        params: { type: 'new', category: categoryId },
      })
    ).data;
  };

  export const getBooks = async (categoryId: number, type: 'new' | 'popular', hashtagIds: number[]) => {
    if (isEmpty(hashtagIds)) {
      return new Promise<Book[]>(() => []);
    }

    return (
      await axiosInstance.get<Book[]>(ApiPath.BOOK.GET_BOOKS, {
        params: { type, category: categoryId, hashtags: join(hashtagIds, ',') },
      })
    ).data;
  };

  export const getBook = async (id?: string | number) => {
    if (!id) {
      throw new Error();
    }

    return (await axiosInstance.get<BookDetail>(`${ApiPath.BOOK.GET_BOOK}${id}`)).data;
  };
}
