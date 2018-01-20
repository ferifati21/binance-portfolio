import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header';
import Price from '../../components/Price';
import Portfolio from '../../components/Portfolio';
import {
  fetchBTCRate,
  loadPortfolio,
  portfolioTotalValue,
  loadMarketData,
  loadMarketCapData,
  portfolioValueChange,
} from './PortfolioLoader';
import styles from './App.css';

export default class App extends Component {
  static childContextTypes = {
    currency: PropTypes.string,
  };

  getChildContext() {
    return {
      currency: this.state.currency,
    };
  }

  state = {
    isLoading: true,
    marketData: [],
    portfolio: [],
    currency: 'EUR',
    btcPrice: {
      BTC: 1,
      USD: 0,
      EUR: 0,
      GBP: 0,
      CNY: 0,
    }
  }

  componentDidMount() {
    const {currency} = this.state;

    fetchBTCRate().then((btcPrice) => {
      chrome.storage.local.get('currency', ({currency}) => {
        if (currency) {
          this.setState({currency});
        }
      });

      this.setState({
        btcPrice,
        isLoading: false,
        portfolio: loadPortfolio(btcPrice),
      }, this.loadMarketData);
    })
  }

  loadMarketData = () => {
    const {portfolio} = this.state;
    loadMarketCapData()
      .then((marketData) => {
        this.setState({marketData})
      });

    Promise.all(loadMarketData(portfolio))
      .then((portfolio) => {
        this.setState({portfolio})
      })
  }

  handleChangeCurrency = (currency) => {
    const {btcPrice} = this.state;
    chrome.storage.local.set({currency});
    this.setState({currency});
  }

  render() {
    const {
      portfolio,
      btcPrice,
      currency,
      marketData,
      isLoading
    } = this.state;

    return (
      <div className={styles.App}>
        <Header
          portfolioValue={portfolioTotalValue(portfolio, currency)}
          onCurrencyChange={this.handleChangeCurrency}
          growth={portfolio.length > 0 ? portfolioValueChange(portfolio, currency) : null}
          currency={currency}
        />

        {portfolio.length > 0 ?
          <Portfolio marketData={marketData} currency={currency} btcPrice={btcPrice} portfolio={portfolio} />
          : null
        }
        {isLoading ? <Loading /> : null}
        <div className={styles.Footer}>
          1 BTC = <Price price={btcPrice[currency]} />. Source: <a target="_blank" href="https://api.coindesk.com/v2/bpi/currentprice.json">Coindesk</a>
        </div>
      </div>
    );
  }
}

function Loading() {
  return (
    <div>
      Loading portfolio...
    </div>
  )
}
