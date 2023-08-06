import { rest } from 'msw';

import { ApiPath } from '@constants/api';
import { Book } from '@models/book';
import { Category } from '@models/category';
import { Hashtag } from '@models/hashtag';

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  rest.get(`${baseUrl}${ApiPath.BOOK.GET_NEWEST}`, (req, res, ctx) => {
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
          hashtags: [
            { id: 1, name: 'BackEnd' },
            { id: 7, name: 'Rust' },
          ],
        },
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
          hashtags: [
            { id: 1, name: 'BackEnd' },
            { id: 7, name: 'Rust' },
          ],
        },
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
          hashtags: [
            { id: 1, name: 'BackEnd' },
            { id: 7, name: 'Rust' },
          ],
        },
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
          hashtags: [
            { id: 1, name: 'BackEnd' },
            { id: 7, name: 'Rust' },
          ],
        },
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
          hashtags: [
            { id: 1, name: 'BackEnd' },
            { id: 7, name: 'Rust' },
          ],
        },
      ]),
    );
  }),
  rest.get(`${baseUrl}${ApiPath.CATEGORY.GET_CATEGORIES}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Category[]>([
        {
          id: 1,
          name: '컴퓨터',
        },
        {
          id: 2,
          name: '언어',
        },
        {
          id: 3,
          name: '드잉',
        },
        {
          id: 4,
          name: '요리',
        },
        {
          id: 5,
          name: '원예',
        },
        {
          id: 6,
          name: '여행',
        },
      ]),
    );
  }),
  rest.get(`${baseUrl}${ApiPath.HASHTAG.GET_HASHTAGS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Hashtag[]>([
        {
          id: 1,
          name: 'BackEnd',
        },
        {
          id: 2,
          name: 'FrontEnd',
        },
        {
          id: 3,
          name: 'DevOps',
        },
        {
          id: 4,
          name: 'DevSecOps',
        },
        {
          id: 5,
          name: 'Java',
        },
        {
          id: 6,
          name: 'Spring',
        },
        {
          id: 7,
          name: 'Rust',
        },
        {
          id: 8,
          name: 'Python',
        },
        {
          id: 9,
          name: 'Kubernetes',
        },
        {
          id: 10,
          name: 'Docker',
        },
        {
          id: 11,
          name: 'Kafka',
        },
        {
          id: 12,
          name: 'MessageQueue',
        },
      ]),
    );
  }),
];
