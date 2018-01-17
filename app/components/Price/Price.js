import React, { Component, PropTypes } from 'react';

export default class Price extends Component {
  static contextTypes = {
    currency: PropTypes.string,
  };

  static propTypes = {
    price: PropTypes.number.isRequired,
  };

  price() {
    const {price} = this.props;
    const {currency} = this.context;

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
