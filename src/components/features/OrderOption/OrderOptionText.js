import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  id: PropTypes.any,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,

};

export default OrderOptionText;
