import { Hashtag } from '@models/hashtag';

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
  title: string;
  hashtags: Hashtag[];
  thumbnail: string;
}
