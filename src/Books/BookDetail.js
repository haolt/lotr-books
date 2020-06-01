import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../constants/API';

const axios = require('axios');

function BookDetail({ match }) {
  const [ name , setName ] = useState('');
  let { _id } = useParams();
  useEffect(() => {
    axios.get(`${ API_URL }book/${ _id }`)
    .then(function (response) {
      const { name } = response.data;
      setName(name);
    })
    .catch(function (error) {
      console.log(error);
    })
  });

  return (
    <ul>
      <li>{ _id }</li>
      <li>{ name }</li>
    </ul>
  );
}

export default BookDetail;