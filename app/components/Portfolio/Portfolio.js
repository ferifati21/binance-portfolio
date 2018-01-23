import React, { PureComponent } from 'react';
import Price from '../../components/Price';
import Coin from '../../components/Coin';
import styles from './Portfolio.css';

const BASE_SYMBOLS = ['BTC', 'ETH'];
export default class Portfolio extends PureComponent {
  state = {
    baseSymbol: 'BTC',
    hideSmallAssets: true,
  }

  updateBase = (event) => {
    const {baseSymbol} = this.state;
    this.setState({
      baseSymbol: event.target.value
    });
  }

  handleSmallAssetsChange = () => {
    this.setState({
      hideSmallAssets: !this.state.hideSmallAssets,
    })
  }

  render() {
    const {portfolio, currency, marketData} = this.props;
    const {hideSmallAssets, baseSymbol} = this.state;

    return (

      <section>
        <div className={styles.Filters}>
          <label htmlFor="binance-portfolio__hide-small-assets">Hide small assets</label>
          <input
            id="binance-portfolio__hide-small-assets"
            type="checkbox"
            checked={hideSmallAssets}
            onChange={this.handleSmallAssetsChange}
          />
        </div>

        <div className={styles.Portfolio}>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Number</th>
                <th>Coin value</th>
                <th>Market Cap</th>
                <th>%</th>
                <th>Value</th>
                <th>1h ⤴</th>
                <th>24h ⤴</th>
                <th>7d ⤴</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((coin) => {
                if (hideSmallAssets && coin.repartitionPercentage < 0.5) { return null; }
                if (coin.repartitionPercentage === 0) { return null; }
                return <Coin
                  {...coin}
                  marketCap={marketData[coin.symbol] ? Number(marketData[coin.symbol].market_cap_usd) : null}
                  percentChange1h={marketData[coin.symbol] ? Number(marketData[coin.symbol].percent_change_1h) : null}
                  percentChange24h={marketData[coin.symbol] ? Number(marketData[coin.symbol].percent_change_24h) : null}
                  percentChange7d={marketData[coin.symbol] ? Number(marketData[coin.symbol].percent_change_7d) : null}
                  key={coin.symbol}
                  currency={currency}
                />
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
