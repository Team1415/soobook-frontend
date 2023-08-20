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

export interface ApiResponse<T> {
  headers: { [x: string]: string };
  statusCode: string;
  statusCodeValue: number;
  body: {
    domain: string;
    success: boolean;
    apiVersion: string;
    result?: T;
  };
}
