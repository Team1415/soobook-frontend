import { HttpStatusCode } from 'axios';

export class ApiError extends Error {
  constructor(message: string, status = HttpStatusCode.InternalServerError, url = '*') {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.url = url;
  }

  status?: number;

  url: string;
}
