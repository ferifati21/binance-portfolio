import React, { Component } from 'react';
import styles from './Popup.css';

export default class Popup extends Component {
  render() {
    return (
      <div className={styles.Popup}>
        <h1>
          Your Binance portfolio
        </h1>
        <p>
          Go to your <a target="_blank" href="https://www.binance.com/userCenter/depositWithdraw.html">Deposits & Withdrawals</a> page to see your portfolio.
        </p>
        <p>
          <a target="_blank" href="https://github.com/nimzco/binance-portfolio">Suggest a feature</a>
        </p>
        <hr />
        <p>
          Created by <a target="_blank" href="https://twitter.com/nimz_co">@nimz_co</a>
        </p>
        <p>
          <strong>Tip jar 🍺</strong>
          <br />
          BTC: <code>1JHkaxDz3cmVQEz9BdDir3wmzAvFQBZNMf</code>
          <br />
          ETH: <code>0xa8d740a68089b63ca1ea095792fbba29f7cdbf4d</code>
        </p>
      </div>
    );
  }
}
