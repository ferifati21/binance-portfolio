import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Price from '../../components/Price';
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
  static propTypes = {
    onCurrencyChange: PropTypes.func.isRequired,
    portfolioValue: PropTypes.number.isRequired,
  };

  static contextTypes = {
    currency: PropTypes.string,
  };

  portfolioValue() {
    const {portfolioValue, growth} = this.props;
    if (!portfolioValue) { return null; }

    return (
      <span className={classNames(styles.Price, styles.positive)}>
        <Price price={portfolioValue}/>
      </span>
    )
  }

  render() {
    const {
      onCurrencyChange,
      portfolioValue,
      growth
    } = this.props;
    const {currency} = this.context;

    return (
      <header className={styles.Header}>
        <div className={styles.TitleWrapper}>
          <h3>Your portfolio</h3>
          {this.portfolioValue()}
        </div>
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
