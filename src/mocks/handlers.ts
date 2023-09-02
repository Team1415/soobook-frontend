import { rest } from 'msw';

import { ApiPath } from '@constants/api';
import { ApiResponse } from '@models/api';
import { Book, BookDetail } from '@models/book';
import { Category } from '@models/category';
import { Hashtag } from '@models/hashtag';

export const handlers = [
  rest.get(`${ApiPath.BOOK.GET_BOOKS}`, (req, res, ctx) => {
    const type = req.url.searchParams.get('type');
    const category = req.url.searchParams.get('category');
    const hashtags = req.url.searchParams.get('hashtags');

    console.log('GET_BOOKS', 'type', type, 'category', category, 'hashtags', hashtags);

    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json<ApiResponse<Book[]>>({
        headers: {},
        statusCode: 'OK',
        statusCodeValue: 200,
        body: {
          apiVersion: '1.0.0',
          success: true,
          domain: '',
          result: [
            {
              id: 1,
              isbn10: 1718500440,
              isbn13: 9781718500440,
              title: 'The Rust Programming Language (Covers Rust 2018)',
              authors: ['Klabnik, Steve', 'Nichols, Carol'],
              publisher: 'No Starch Press',
              price: 59540,
              salePrice: 45490,
              status: '정상판매',
              publishDate: new Date('2019-08-05T15:00:00'),
              thumbnailUrl:
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
              authors: ['Klabnik, Steve', 'Nichols, Carol'],
              publisher: 'No Starch Press',
              price: 59540,
              salePrice: 45490,
              status: '정상판매',
              publishDate: new Date('2019-08-05T15:00:00'),
              thumbnailUrl:
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
              authors: ['Klabnik, Steve', 'Nichols, Carol'],
              publisher: 'No Starch Press',
              price: 59540,
              salePrice: 45490,
              status: '정상판매',
              publishDate: new Date('2019-08-05T15:00:00'),
              thumbnailUrl:
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
              authors: ['Klabnik, Steve', 'Nichols, Carol'],
              publisher: 'No Starch Press',
              price: 59540,
              salePrice: 45490,
              status: '정상판매',
              publishDate: new Date('2019-08-05T15:00:00'),
              thumbnailUrl:
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
              authors: ['Klabnik, Steve', 'Nichols, Carol'],
              publisher: 'No Starch Press',
              price: 59540,
              salePrice: 45490,
              status: '정상판매',
              publishDate: new Date('2019-08-05T15:00:00'),
              thumbnailUrl:
                'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
              hashtags: [
                { id: 1, name: 'BackEnd' },
                { id: 7, name: 'Rust' },
              ],
            },
          ],
        },
      }),
    );
  }),
  rest.get(`${ApiPath.BOOK.GET_BOOK}1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponse<BookDetail>>({
        headers: {},
        statusCode: 'OK',
        statusCodeValue: 200,
        body: {
          apiVersion: '1.0.0',
          success: true,
          domain: '',
          result: {
            id: 1,
            isbn10: 1718500440,
            isbn13: 9781718500440,
            title: 'The Rust Programming Language (Covers Rust 2018)',
            authors: ['Klabnik, Steve', 'Nichols, Carol'],
            translators: ['신지호'],
            publisher: 'No Starch Press',
            description:
              'Rust is proving to be a productive tool for collaborating among large teams of developers with varying levels of systems programming knowledge. Low-level code is prone to various subtle bugs, which in most other languages can be caught only through extensive testing and careful code review by experienced developers. In Rust, the compiler plays a gatekeeper role by refusing to compile code with these elusive bugs, including concurrency bugs. By working alongside the compiler, the team can spend their time focusing on the program’s logic rather than chasing down bugs.',
            page: 528,
            price: 59540,
            salePrice: 45490,
            status: '정상판매',
            publishDate: new Date('2019-08-05T15:00:00'),
            thumbnailUrl:
              'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031',
            hashtags: [
              { id: 1, name: 'BackEnd' },
              { id: 7, name: 'Rust' },
            ],
            index: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non finibus massa. Suspendisse potenti. Nullam tempus neque sit amet gravida aliquet. Etiam mollis lacus id tincidunt euismod. Cras ut facilisis purus, a varius ante. Maecenas felis purus, auctor in leo vitae, laoreet molestie dolor. Morbi sodales orci urna, vel sodales nulla dapibus id.

              Donec mollis, velit sit amet semper volutpat, orci ex rhoncus lorem, at facilisis nisi elit nec nisl. In semper tincidunt consequat. Praesent eget felis ullamcorper, hendrerit lectus a, fermentum justo. Vestibulum luctus vulputate fringilla. Curabitur dolor urna, sagittis sit amet purus id, porta blandit arcu. Maecenas magna quam, mattis vel lobortis id, condimentum in quam. Aenean ac efficitur lectus. Donec tempor sed augue at fringilla. Nulla pharetra tempus dolor, dapibus fermentum lacus pulvinar vitae. In felis nisl, tempus quis convallis sit amet, tempor sit amet eros. Mauris sit amet velit nisi.

              Duis non felis euismod, cursus ipsum quis, finibus dolor. Aenean mollis finibus consequat. In sollicitudin facilisis est sed molestie. Donec imperdiet consequat mattis. Donec maximus tellus dolor, sed egestas lacus rhoncus vitae. Quisque ultrices laoreet lacus quis hendrerit. Nulla facilisi. Sed dictum urna nisl, sed accumsan nunc suscipit ac. Quisque egestas nulla at mattis ornare. Curabitur lacus ligula, consectetur vel velit ac, interdum fermentum lorem.

              Nullam fringilla mauris egestas accumsan maximus. Curabitur laoreet a erat quis tempus. Fusce ultrices odio mauris, ut interdum erat pulvinar nec. Maecenas vitae ipsum luctus, pharetra arcu in, imperdiet nulla. Vestibulum vitae dui vel ante pharetra sollicitudin eu sit amet leo. Nulla et ex felis. Nullam pretium ut leo vitae rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras commodo metus arcu. Nulla in odio mattis, interdum libero sed, efficitur justo. Sed eu varius tellus. Integer nunc tortor, ullamcorper ac rutrum id, cursus non mi. In hac habitasse platea dictumst. Integer scelerisque at diam in bibendum. Aenean risus turpis, luctus vel dapibus non, placerat ac nisi. Nulla sem tellus, maximus tempus eros ac, sagittis pharetra arcu.

              Aliquam lorem eros, eleifend at pharetra nec, iaculis id libero. Aliquam nisl nunc, posuere at risus a, interdum tristique nulla. Nam vitae tellus risus. Quisque accumsan ac elit a fermentum. Nullam fringilla velit ligula, sed porttitor massa volutpat sed. Donec sollicitudin eu nulla ac tristique. Ut elit nulla, varius non purus nec, rhoncus laoreet nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a sagittis arcu. Nulla nulla enim, facilisis sit amet leo a, luctus luctus turpis. Pellentesque tincidunt urna a feugiat ullamcorper. Praesent ut feugiat tellus. Duis sagittis, magna eget viverra interdum, odio leo varius turpis, vitae feugiat orci turpis vitae velit. Donec nec auctor lorem, ac ultrices diam.`,
          },
        },
      }),
    );
  }),
  rest.get(`${ApiPath.CATEGORY.GET_CATEGORIES}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ApiResponse<Category[]>>({
        headers: {},
        statusCode: 'OK',
        statusCodeValue: 200,
        body: {
          apiVersion: '1.0.0',
          success: true,
          domain: '',
          result: [
            {
              id: 1,
              name: '컴퓨터',
              useYn: 'Y',
            },
            {
              id: 2,
              name: '언어',
              useYn: 'N',
            },
            {
              id: 3,
              name: '드로잉',
              useYn: 'N',
            },
            {
              id: 4,
              name: '요리',
              useYn: 'N',
            },
            {
              id: 5,
              name: '원예',
              useYn: 'N',
            },
            {
              id: 6,
              name: '여행',
              useYn: 'N',
            },
          ],
        },
      }),
    );
  }),
  rest.get(`${ApiPath.HASHTAG.GET_HASHTAGS}`, (req, res, ctx) => {
    const sort = req.url.searchParams.get('sort');
    const category = req.url.searchParams.get('category');

    console.log('GET_HASHTAGS', 'sort', sort, 'category', category);

    return res(
      ctx.status(200),
      ctx.json<ApiResponse<Hashtag[]>>({
        headers: {},
        statusCode: 'OK',
        statusCodeValue: 200,
        body: {
          apiVersion: '1.0.0',
          success: true,
          domain: '',
          result: [
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
          ],
        },
      }),
    );
  }),
];
