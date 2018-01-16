import React, { Component, PropTypes } from 'react';
import Price from '../components/Price';
import styles from './Coin.css';

export default function Coin(props) {
  const {
    name,
    imageURL,
    value,
    total,
    percentage,
    currency
  } = props;

  return (
    <div className={styles.Coin}>
      <div className={styles.Name}>
        <img className={styles.Image} height={24} src={imageURL} />
        {name}
      </div>
      <div className={styles.Total}>
        {Number(total)}
      </div>
      <div className={styles.Percentage}>
        {(percentage / 100).toLocaleString('en', {style: 'percent', maximumFractionDigits: 1})}
      </div>
      <div className={styles.Price}>
        <Price currency={currency} price={value} />
      </div>
    </div>
  )
}
