import React, { PropTypes, Component } from 'react';
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
      <span className={classNames(styles.Price, (growth > 0 ? styles.positive : styles.negative))}>
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
          {growth ?
            <span className={(growth > 0 ? styles.positiveGrowth : styles.negativeGrowth)}>
              &nbsp;{(growth > 0 ? '+' : null)}<Price price={growth} />
            </span>
          : null}
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
