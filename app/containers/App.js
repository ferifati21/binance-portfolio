import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import Price from '../components/Price';
import Portfolio from '../components/Portfolio';
import {loadPortfolio, portfolioTotalValue} from './PortfolioLoader';
import style from './App.css';

export default class App extends Component {
  state = {
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
        portfolio: loadPortfolio(btcPrice),
      });
    })
  }

  handleChangeCurrency = (currency) => {
    const {btcPrice} = this.state;
    chrome.storage.local.set({currency});
    this.setState({currency});
  }

  render() {
    const {portfolio, btcPrice, currency} = this.state

    return (
      <div className={style.App}>
        <Header portfolioValue={portfolioTotalValue(portfolio, currency)} onCurrencyChange={this.handleChangeCurrency} currency={currency} />
        {portfolio.length === 0 ?
          <Loading />
          : <Portfolio currency={currency} btcPrice={btcPrice} portfolio={portfolio} />
        }
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
function fetchBTCRate() {
  return fetch('https://api.coindesk.com/v2/bpi/currentprice.json')
    .then((response) => response.json())
    .then((response) => {
      return {
        BTC: 1,
        USD: parseFloat(response.bpi.USD.rate.replace(',', '')),
        EUR: parseFloat(response.bpi.EUR.rate.replace(',', '')),
        GBP: parseFloat(response.bpi.GBP.rate.replace(',', '')),
        CNY: parseFloat(response.bpi.CNY.rate.replace(',', '')),
      }
    })
}
