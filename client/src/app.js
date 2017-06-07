import React from 'react';
import ReactDOM from 'react-dom';
import AppleSongContainer from './containers/AppleSongContainer'



window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(
    <AppleSongContainer />, targetDiv);
});
