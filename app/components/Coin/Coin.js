import React, { PureComponent, PropTypes } from 'react';
import Price from '../../components/Price';
import styles from './Coin.css';

export default class Coin extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  static contextTypes = {
    currency: PropTypes.string,
  };

  render() {
    const {
      name,
      imageURL,
      prices,
      total,
      percentage,
    } = this.props;
    const {currency} = this.context;

    return (
      <div className={styles.Coin}>
        <div className={styles.Name}>
          <img className={styles.Image}  src={imageURL} />
          {name}
        </div>
        <div className={styles.Total}>
          {total}
        </div>
        <div className={styles.Percentage}>
          {(percentage / 100).toLocaleString('en', {style: 'percent', maximumFractionDigits: 1})}
        </div>
        <div className={styles.Price}>
          <Price price={prices[currency]} />
        </div>
      </div>
    )
  }
}
