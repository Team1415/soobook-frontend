import { rest } from 'msw';

import { Book } from '@models/book';

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  rest.get(`${baseUrl}/books/newest`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Book[]>([
        {
          id: 1,
          isbn10: 1718500440,
          isbn13: 9781718500440,
          title: 'The Rust Programming Language (Covers Rust 2018)',
          publisher: 'No Starch Press',
          price: 59540,
          salePrice: 45490,
          status: '정상판매',
          publishDatetime: new Date('2019-08-05T15:00:00'),
          thumbnail:
            'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
        },
      ]),
    );
  }),
];
