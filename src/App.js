import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import BookList from './Books/BookList';
import BookDetail from './Books/BookDetail';

function App() {
  return (
    <div className="App">
      <h3>L.O.T.R</h3>
      <Switch>
        <Route exact path="/">
          <Redirect to="/book" />
        </Route>
        <Route exact path="/book">
          <BookList />
        </Route>
        <Route path={`/book/:_id`}>
          <BookDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
