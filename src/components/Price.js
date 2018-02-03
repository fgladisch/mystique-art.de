import React from 'react';

const Price = ({ price, text }) => (
  <dl className="row">
    <dt className="col-2">{price}</dt>
    <dd className="col-10">{text}</dd>
  </dl>
)

export default Price
