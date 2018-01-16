import React, { Component, PropTypes } from 'react';
import styles from './Popup.css';

export default class Popup extends Component {
  render() {
    return (
      <div className={styles.Popup}>
        <h1>
          Binance portfolio
        </h1>
        <p>
          Go to your&nbsp;
          <a target="_blank" href="https://www.binance.com/userCenter/depositWithdraw.html">Deposits & Withdrawals</a>&nbsp;
          page to see your portfolio.
        </p>
        <p>
          <a target="_blank" href="https://github.com/nimzco/binance-portfolio">Suggest a feature</a>
        </p>
        <p>
          Created by
          <a target="_blank" href="https://twitter.com/nimz_co">
            @nimz_co
          </a>
        </p>
        <hr />
        <p>
          Buy me a beer:
          <br />
          BTC: 1JHkaxDz3cmVQEz9BdDir3wmzAvFQBZNMf
          <br />
          ETH: 0xa8d740a68089b63ca1ea095792fbba29f7cdbf4d
        </p>
      </div>
    );
  }
}
