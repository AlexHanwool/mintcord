import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthTemplate = ({ children }) => {
  return (
    <div className={cx('auth-template')}>
      <div className={cx('auth-area')}>
        <div className={cx('logo')}>
          <Link to="/">MINTCORD</Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;