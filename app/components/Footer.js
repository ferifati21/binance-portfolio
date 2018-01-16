import React, { PropTypes, PureComponent } from 'react';
import styles from './Footer.css';

export default class Header extends PureComponent {
  render() {

    return (
      <footer className={styles.Header}>
        Created by
        <a href="https://github.com/nimzco/binance-portfolio">
          @nimz_co
        </a>
        BTC:
        ETH:
      </footer>
    );
  }
}
