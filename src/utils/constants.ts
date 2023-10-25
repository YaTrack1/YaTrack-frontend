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

export const NOT_FOUND_NOTICE = {
  TITLE: 'Страница не найдена',
  SUBTITLE: 'Страница, которую вы запрашиваете, не существует. Возможно, она была удалена, или вы набрали неверный адрес',
};

export const BAD_GATEWAY = {
  TITLE: 'Отсутствует подключение к сети',
  SUBTITLE: 'Проверьте соединение с интернетом или настройки брандмауэра. Для продолжения работы требуется доступ к сети Интернет',
};

export const NO_CANDIDATE_NOTICE = {
  TITLE: 'Нет подходящих кандидатов',
  SUBTITLE: 'Возможно, стоит пересмотреть требования вакансии',
};

export const NO_FAVORITES_NOTICE = {
  TITLE: 'Тут будут отображаться кандидаты после добавления в избранное',
  SUBTITLE: 'Это можно сделать на вкладке Подходящие кандидаты',
};

export const NO_INVITED_NOTICE = {
  TITLE: 'Тут будут отображаться кандидаты после отправки приглашений',
  SUBTITLE: 'Это можно сделать на вкладке Подходящие кандидаты или Избранное',
};

