import { HttpClient } from './HttpClient/HttpClient'

export const api = new HttpClient(
  {
    baseURL: 'http://localhost:5000/api',
  },
  (body) => body,
  (response) => response
)
