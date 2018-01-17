import React, { PureComponent, PropTypes } from 'react';
import Price from '../../components/Price';
import styles from './Coin.css';
import classNames from 'classnames';

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
      <tr className={styles.Coin}>
        <td className={styles.Name}>
          <img className={styles.Image}  src={imageURL} />
          {name}
        </td>
        <td className={styles.Total}>
          {total}
        </td>
        <td className={styles.Percentage}>
          {(percentage / 100).toLocaleString('en', {style: 'percent', maximumFractionDigits: 1})}
        </td>
        <td className={styles.Price}>
          <Price price={prices[currency]} />
        </td>
      </tr>
    )
  }
}
