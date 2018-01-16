import React, { Component, PropTypes } from 'react';

export default class Price extends Component {
  static propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  };

  price() {
    const {price, currency} = this.props
    if (currency === 'BTC') {
      return `${price.toFixed(8)} BTC`
    } else {
      return price.toLocaleString('en', {style: 'currency', currency: currency})
    }
  }

  render() {
    return (
      <span>
        {this.price()}
      </span>
    );
  }
}
