import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Price extends Component {
  static contextTypes = {
    currency: PropTypes.string,
  };

  static propTypes = {
    price: PropTypes.number.isRequired,
    cents: PropTypes.bool,
    currency: PropTypes.string,
  };

  price() {
    const {price, cents} = this.props;
    const currency = this.props.currency || this.context.currency;

    if (currency === 'BTC') {
      return `${price.toFixed(8)} BTC`
    } else {
      return price.toLocaleString('en', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: (cents === false ? 0 : 2),
        maximumFractionDigits: (cents === false ? 0 : 2),
      });
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
