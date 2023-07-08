import { rest } from 'msw';

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  rest.get(`${baseUrl}/api/books/new`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ isbn: 'test', name: '와 개발책 타이어보다 싸다', publisher: '지호북스' }]),
    );
  }),
];
