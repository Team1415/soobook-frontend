import { Hashtag } from '@models/hashtag';

import { Index } from '.';

export interface Book {
  id: number;
  isbn10: number;
  isbn13: number;
  title: string;
  publisher: string;
  price: number;
  salePrice: number;
  status: string;
  publishDatetime: Date;
  thumbnail: string;
  hashtags: Hashtag[];
}

export interface BookCardModel {
  id: number;
  title: string;
  hashtags: Hashtag[];
  thumbnail: string;
}

export interface BookDetail {
  id: number;
  isbn10: number;
  isbn13: number;
  title: string;
  author: string;
  publisher: string;
  description: string;
  page: number;
  price: number;
  salePrice: number;
  status: string;
  publishDatetime: Date;
  thumbnail: string;
  hashtags: Hashtag[];
  indexs: Index[];
}
