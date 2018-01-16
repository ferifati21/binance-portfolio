import React, { Component, PropTypes } from 'react';

export default class Price extends Component{
  static propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  };

  render() {
    const {price, currency} = this.props
    return (
      <span>
        {price.toLocaleString('en', {style: 'currency', currency: currency})}
      </span>
    );
  }
}
