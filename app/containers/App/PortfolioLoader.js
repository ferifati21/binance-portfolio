export function loadPortfolio(btcPrice) {
  const portfolio = [];
  let totalBTCValue = 0;
  const coinRows = document.querySelectorAll('.td .items.f-cb');

  coinRows.forEach((row) => {
    const balance = parseFloat(row.querySelector('.total').textContent);
    const symbol = row.querySelector('.coin').textContent;
    const name = (row.querySelector('.fullName a') ? row.querySelector('.fullName a').textContent : '');
    const total = Number(row.querySelector('.total').textContent);
    const btcValue = parseFloat(row.querySelector('.equalValue').textContent);
    const prices = {}; btcPrice;

    Object.keys(btcPrice).map((currency) => {
      prices[currency] = btcValue * btcPrice[currency];
    });

    portfolio.push({
      btcValue,
      symbol,
      name,
      total,
      imageURL: (row.querySelector('.coin img') ? row.querySelector('.coin img').src : ''),
      btcValue,
      prices,
    });

    totalBTCValue += btcValue;
  });

  portfolio.map((coin) => {
    coin.repartitionPercentage = (coin.btcValue * 100) / totalBTCValue;
  });

  portfolio.sort((a, b) => {
    return (a.repartitionPercentage < b.repartitionPercentage ? 1 : -1);
  })

  return portfolio;
}


export function portfolioTotalValue(portfolio, currency) {
  return portfolio.map((coin) => {
    return coin.prices[currency];
  }).reduce((a, b) => { return a + b; }, 0);
}

export function fetchBTCRate() {
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

export function loadMarketCapData() {
  return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=400')
  .then((res) => res.json())
  .then((responseArr) => {
    const marketData = {};
    responseArr.map((response) => marketData[response.symbol] = response);
    return marketData;
  });
}

export function portfolioValueChange(portfolio, currency) {
  return portfolio
    .map((coin) => coin.priceChangeValues ? coin.priceChangeValues[currency] : 0)
    .reduce((a, b) => { return a + b;}, 0)
}
