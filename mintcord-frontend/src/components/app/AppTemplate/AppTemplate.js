import React from 'react';

import styles from './AppTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AppTemplate = ({ children }) => {
  return (
    <div className={cx('app-template')}>
      <div className={cx('channel-list')}>
        
      </div>
      <div className={cx('channel-route')}>
        {children}
      </div>
    </div>
  );
};

export default AppTemplate;