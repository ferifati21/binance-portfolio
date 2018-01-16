import React, { PureComponent, PropTypes } from 'react';
import Price from '../components/Price';
import styles from './Coin.css';

export default class Coin extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  };

  render() {
    const {
      name,
      imageURL,
      prices,
      total,
      percentage,
      currency
    } = this.props;

    return (
      <div className={styles.Coin}>
        <div className={styles.Name}>
          <img className={styles.Image} height={24} src={imageURL} />
          {name}
        </div>
        <div className={styles.Total}>
          {total}
        </div>
        <div className={styles.Percentage}>
          {(percentage / 100).toLocaleString('en', {style: 'percent', maximumFractionDigits: 1})}
        </div>
        <div className={styles.Price}>
          <Price currency={currency} price={prices[currency]} />
        </div>
      </div>
    )
  }
}
