import React from 'react';
import { useRecoilValue } from 'recoil';
import booklistState from './states/booklist';

function App() {
  const bookList = useRecoilValue(booklistState);
  return (
    <div className="App">
      LOTR | Setup
      { bookList.length }
    </div>
  );
}

export default App;
