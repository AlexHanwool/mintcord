import React from 'react';

import styles from './AppTemplate.scss';
import classNames from 'classnames/bind';

import ChannelList from 'components/app/ChannelList';

const cx = classNames.bind(styles);

const AppTemplate = ({ children }) => {
  return (
    <div className={cx('app-template')}>
      <ChannelList />
      {children}
    </div>
  );
};

export default AppTemplate;