import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Price from '../../components/Price';
import styles from './Coin.css';
import classNames from 'classnames';

export default class Coin extends PureComponent {
  state = {}

  static propTypes = {
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    prices: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    repartitionPercentage: PropTypes.number.isRequired,
  };

  static contextTypes = {
    currency: PropTypes.string,
  };

  percentage(priceChangePercent) {
    if (!priceChangePercent) { return; }

    return (Number(priceChangePercent) / 100).toLocaleString('en', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  render() {
    const {
      symbol,
      imageURL,
      prices,
      total,
      marketCap,
      repartitionPercentage,
      percentChange1h,
      percentChange24h,
      percentChange7d,
    } = this.props;
    const {currency} = this.context;

    return (
      <tr className={styles.Coin}>
        <td className={styles.Name}>
          <img className={styles.Image}  src={imageURL} />
          {symbol}
        </td>
        <td className={styles.Total}>
          {total}
        </td>
        <td className={styles.Total}>
          <Price price={prices[currency] / total} />
        </td>
        <td className={styles.Total}>
          {marketCap ? <Price price={marketCap} currency="USD" cents={false} /> : null}
        </td>
        <td className={styles.Percentage}>
          {(repartitionPercentage / 100).toLocaleString('en', {style: 'percent', maximumFractionDigits: 1})}
        </td>
        <td className={styles.Price}>
          <Price price={prices[currency]} />
        </td>
        <td className={classNames(styles.Growth, percentChange1h > 0 ? styles.positive : styles.negative)}>
          {this.percentage(percentChange1h)}
        </td>
        <td className={classNames(styles.Growth, percentChange24h > 0 ? styles.positive : styles.negative)}>
          {this.percentage(percentChange24h)}
        </td>
        <td className={classNames(styles.Growth, percentChange7d > 0 ? styles.positive : styles.negative)}>
          {this.percentage(percentChange7d)}
        </td>
      </tr>
    )
  }
}
