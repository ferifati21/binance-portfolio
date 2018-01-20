import React, { PureComponent, PropTypes } from 'react';
import Price from '../../components/Price';
import Coin from '../../components/Coin';
import styles from './Portfolio.css';

const BASE_SYMBOLS = ['BTC', 'ETH'];
export default class Portfolio extends PureComponent {
  state = {
    baseSymbol: 'BTC',
    growthType: '%',
  }

  updateGrowthType = (event) => {
    const {growthType} = this.state;
    this.setState({
      growthType: growthType === '%' ? '$' : '%',
    })
  }

  updateBase = (event) => {
    const {baseSymbol} = this.state;
    this.setState({
      baseSymbol: event.target.value
    });
  }

  render() {
    const {portfolio, currency, marketData} = this.props;
    const {baseSymbol, growthType} = this.state;

    return (
      <section className={styles.Portfolio}>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Number</th>
              <th>Market Cap</th>
              <th>%</th>
              <th>Value</th>
              <th>
                24h ⤴
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((coin) =>
              <Coin
                {...coin}
                growthType={growthType}
                baseSymbol={baseSymbol}
                marketCap={marketData[baseSymbol] ? Number(marketData[coin.symbol].market_cap_usd) : null}
                key={coin.symbol}
                updateGrowthType={this.updateGrowthType}
                currency={currency}
              />
            )}
          </tbody>
        </table>
      </section>
    );
  }
}
