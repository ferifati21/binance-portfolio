import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../../app/containers/App';

window.addEventListener('load', () => {
  const reactRoot = document.createElement('div');
  const title = document.querySelector('.chargeWithdraw-title');
  title.parentElement.insertBefore(reactRoot, title);

  render(
    <App />,
    reactRoot
  );
});
