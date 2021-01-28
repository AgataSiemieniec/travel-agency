import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'}>none</Icon>
      </div>
    )}
    {values.map(value => (
      <div
        className= {(value.id === currentValue) ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}>{value.name} ({formatPrice(value.price)})</Icon>
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue:PropTypes.func,
};

export default OrderOptionIcons;
