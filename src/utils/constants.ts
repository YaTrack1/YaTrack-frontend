export const BASE_URL = 'http://194.67.113.101/';

export const JSON_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const EMAIL_REGX =
  /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

export const NOT_FOUND_NOTICE = {
  TITLE: 'Страница не найдена',
  SUBTITLE:
    'Страница, которую вы запрашиваете, не существует. Возможно, она была удалена, или вы набрали неверный адрес',
};

export const BAD_GATEWAY = {
  TITLE: 'Отсутствует подключение к сети',
  SUBTITLE:
    'Проверьте соединение с интернетом или настройки брандмауэра. Для продолжения работы требуется доступ к сети Интернет',
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

export const WORK_SCHEDULE = [
  'Удаленная работа',
  'Гибкий график',
  'Сменный график',
];
export const BUSY_LIST = ['Полная', 'Частичная', 'Стажировка', 'Волонтёрство'];
export const HARD_SKILL_LIST_IMPORTANT = [
  'UX-исследования',
  'Прототипирование',
  'Анимация',
  'Типографика',
  'UI-kit',
];
export const HARD_LIST_SKILL_ADDITIONAL = [
  'UX-исследования',
  'Прототипирование',
  'Анимация',
  'Типографика',
  'UI-kit',
  'JavaScript',
  'React',
  'MUI',
  'CSS',
  'БЭМ',
];

export const COMPANY_LIST = [
  { name: 'ЯП', INN: 'ИНН 1111111111', id: 1 },
  { name: 'Решения для бизнеса', INN: 'ИНН 1111111111', id: 2 },
  { name: 'Сбербанк', INN: 'ИНН 1111111111', id: 3 },
  { name: 'ВТБ', INN: 'ИНН 1111111111', id: 4 },
];

export const MAIN_MENU_LIST = [
  { id: 1, title: 'Личный кабинет' },
  { id: 2, title: 'Настройки' },
  { id: 3, title: 'Выход' },
];

export const LIST_VACANCIES = [
  { jobtitle: 'UX/UI дизайнер (junior)', newresume: [1, 2, 3, 4, 5, 6], id: 1 },
  {
    jobtitle: 'Front-end разработчик (junior)',
    newresume: [1, 2, 3, 4, 5, 6],
    id: 2,
  },
  {
    jobtitle: 'UX1/UI дизайнер (junior)',
    newresume: [1, 2, 3, 4, 5, 6],
    id: 3,
  },
  {
    jobtitle: 'Front-end разработчик (junior)',
    newresume: [1, 2, 3, 4, 5, 6],
    id: 4,
  },
  { jobtitle: 'UX/UI дизайнер (junior)', newresume: [1, 2, 3, 4, 5, 6], id: 5 },
  {
    jobtitle: 'Front-end разработчик (junior)',
    newresume: [1, 2, 3, 4, 5, 6],
    id: 6,
  },
  { jobtitle: 'UX/UI дизайнер (junior)', newresume: [1, 2, 3, 4, 5, 6], id: 7 },
];

export const MENU_BTN = [
  { i: 1, menu: 'Подходящие кандидаты' },
  { i: 2, menu: 'Избранное' },
  { i: 3, menu: 'Приглашенные' },
];
export const CARD_LIST = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
export const CARD_LIST_BUTTONS = [
  { submenu: 'Активные', color: '#FFF9D3' },
  { submenu: 'Максимальное совпадение', color: ' rgba(255, 191, 253, 0.87)' },
  { submenu: 'Проявившие интерес', color: '#ACCCFF' },
];
export const LIKE_LIST_BUTTONS = [
  { submenu: 'Принято', color: '#C2E5CE' },
  { submenu: 'Отказ', color: '#FFDDE5' },
  { submenu: 'Ожидание', color: '#FFF9D3' },
];
export const LIKED_LIST = [{}, {}, {}];
export const INVITED_LIST = [{}, {}];
