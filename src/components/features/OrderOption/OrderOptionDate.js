import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({setOptionValue, currentValue}) => (
  <div className={styles.date}>
    <DatePicker selected={currentValue} onChange={date => setOptionValue(date)} />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
