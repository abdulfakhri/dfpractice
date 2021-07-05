import React from 'react';
import ReactDOM from 'react-dom';
//for stylying the webpage we need to import this SASS file
import './App.scss';
import Validation from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Validation />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
