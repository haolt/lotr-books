import { atom } from 'recoil';

const BOOK_LIST = 'bookList';

const booklistState = atom({
  key: BOOK_LIST,
  default: [],
});

export default booklistState;
