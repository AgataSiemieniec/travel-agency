import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';


const HappyHourAd = ({title, promoDescription}) => (
  <div className={styles.component}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.promoDescription}>{promoDescription}</p>
  </div>
);

HappyHourAd.propTypes ={
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;
