import React, { PureComponent, PropTypes } from 'react';
import Price from '../../components/Price';
import Coin from '../../components/Coin';
import styles from './Portfolio.css';

export default class Portfolio extends PureComponent {
  render() {
    const {portfolio, currency} = this.props;

    return (
      <section className={styles.Portfolio}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>%</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((coin) =>
              <Coin key={coin.name} {...coin} currency={currency} />
            )}
          </tbody>
        </table>
      </section>
    );
  }
}

