import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../../app/containers/Popup';
import './app.css';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;

  ReactDOM.render(
    <Popup />,
    document.querySelector('#root')
  );
});
