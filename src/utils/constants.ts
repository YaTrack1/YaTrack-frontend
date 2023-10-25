export const BASE_URL = '';

export const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const NOT_FOUND_TITLE = 'Страница не найдена';
export const NOT_FOUND_SUBTITLE = 'Страница, которую вы запрашиваете, не существует<br>Возможно, она была удалена, или вы набрали неверный адрес';
export const BAD_GATEWAY_TITLE = 'Отсутствует подключение к сети';
export const BAD_GATEWAY_SUBTITLE = 'Проверьте соединение с интернетом или настройки брандмауэра<br>Для продолжения работы требуется доступ к сети Интернет';