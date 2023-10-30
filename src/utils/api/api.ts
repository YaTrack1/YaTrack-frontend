import { BASE_URL, JSON_HEADERS, METHOD } from '../constants';
import { UserType } from './types';

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => Promise.reject(`Ошибка: ${data.message}`));
};

export const register = ({ username, email, password }: UserType) => {
  return fetch(`${BASE_URL}/auth/users`, {
    method: METHOD.POST,
    headers: JSON_HEADERS,
    body: JSON.stringify({ username, email, password }),
  })
    .then(res => checkResponse<UserType>(res));
};

export const login = ({ email, password }: UserType) => {
  return fetch(`${BASE_URL}/auth/token/login`, {
    method: METHOD.POST,
    headers: JSON_HEADERS,
    body: JSON.stringify({ email, password }),
  })
    .then(res => checkResponse<UserType>(res));
};
