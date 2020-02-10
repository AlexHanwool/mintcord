import React from 'react';

import styles from './ErrorMessage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ErrorMessage = ({ children }) => {
  return (
    <div className={cx('error-message')}> 
      {children}
    </div>
  );
};

export default ErrorMessage;