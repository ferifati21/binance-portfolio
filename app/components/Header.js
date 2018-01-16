import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Price from '../components/Price';
import styles from './Header.css';

const CURRENCIES = ['BTC', 'USD', 'EUR', 'GBP', 'CNY'];
const CURRENCY_SIGN = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CNY: '¥',
  BTC: 'BTC',
}

export default class Header extends Component {
  render() {
    const {
      onCurrencyChange,
      currency,
      portfolioValue
    } = this.props;

    return (
      <header className={styles.Header}>
        <h3>
          Binance portfolio
          –&nbsp;
          {portfolioValue ?
            <Price currency={currency} price={portfolioValue}/>
            : null
          }
        </h3>
        {Object.keys(CURRENCY_SIGN).map((_currency) =>
          <a
            key={_currency}
            className={classNames(styles.Button, _currency === currency && styles.active)}
            onClick={() => onCurrencyChange(_currency)}
          >
            {CURRENCY_SIGN[_currency]}
          </a>
        )}
      </header>
    );
  }
}
