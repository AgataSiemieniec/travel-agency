import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';
import {Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({tripCost, options}) => (
  <Col xs={12}>
    <OrderSummary tripCost={tripCost} options={options}/>
  </Col>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
export default OrderForm;
