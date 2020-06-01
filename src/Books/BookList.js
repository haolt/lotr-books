import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from "react-router-dom";

import booklistState from '../states/booklist';
import { API_URL  } from '../constants/API';
import BookItem from './BookItem';

const axios = require('axios');

function BookList() {

  const [ bookList, setBookList ] = useRecoilState(booklistState);

  useEffect(() => {
    axios.get(`${ API_URL }book`)
    .then(function (response) {
      const bookList = response.data.docs;
      setBookList(bookList);
    })
    .catch(function (error) {
      console.log(error);
    })
  });

  return (
    <div className="App">
      <h3>BookList</h3>
      { bookList.map(book => (
          <BookItem key={ book._id } _id={ book._id } name={ book.name } />
      )) }
    </div>
  );
}

export default BookList;
