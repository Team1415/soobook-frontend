import { Hashtag } from '@models/hashtag';

export interface Book {
  id: number;
  isbn10: number;
  isbn13: number;
  title: string;
  authors: string[];
  translators?: string[];
  publisher: string;
  price: number;
  salePrice: number;
  status: string;
  publishDate: Date;
  thumbnailUrl: string;
  hashtags: Hashtag[];
}

export interface BookCardModel {
  id: number;
  title: string;
  hashtags: Hashtag[];
  thumbnailUrl: string;
}

export interface BookDetail {
  id: number;
  isbn10: number;
  isbn13: number;
  title: string;
  authors: string[];
  translators?: string[];
  publisher: string;
  description: string;
  page: number;
  price: number;
  salePrice: number;
  status: string;
  publishDate: Date;
  thumbnailUrl: string;
  hashtags: Hashtag[];
  index: string;
}

export interface BookListCardModel extends BookCardModel {
  publisher: string;
}
