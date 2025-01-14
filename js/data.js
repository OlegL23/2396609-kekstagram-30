import { getRandomInteger, getRandomArrayElement, generatePhotoId, generateCommentId } from './unit.js';

const PHOTO_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENT_COUNT = 30;
const AVATAR_COUNT = 6;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Встретились с друзьями',
  'Любимая работа',
  'После работы нужен отдых!',
  'В командировке',
  'Это я, если забыли как я выгляжу',
  'Семья - это главное',
  'Первый снег в Москве',
  'Интересно, и почему же мы любим спать?',
  'Мой кот'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия'
];

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(COMMENTS),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(1, PHOTO_COUNT)}.jpg`,
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment
  )
});


export { PHOTO_COUNT, createPhoto };
