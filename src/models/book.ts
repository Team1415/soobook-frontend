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
}

export interface BookCardModel {
  title: string;
  hashtags: string[];
  imageUrl: string;
}

export interface BookListCardModel extends BookCardModel {
  publisher: string;
}
