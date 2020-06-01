import React from 'react';
import { Link } from "react-router-dom";

function BookItem({ _id, name }) {
  return (
    <Link to={`/book/${_id }`}>
      <p>{ name}</p>
    </Link>
  );
}

export default BookItem;