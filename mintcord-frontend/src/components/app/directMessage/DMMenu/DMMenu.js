import React from 'react';

import styles from './DMMenu.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const DMMenu = () => {
  return (
    <div className={cx('dm-menu')}>
      <div className={cx('header')}>

      </div>
      <div className={cx('main')}>
        <Button fullWidth to="/dev/DM/main">
          <img src="/icons/icon-friends.svg" />
          <div style={{flex:0.7}}>Friends</div>
        </Button>
        <div>
          private message
          +
        </div>
        friend1
        friend2
        friend3
      </div>
      <div className={cx('footer')}>

      </div>
    </div>
  );
};

export default DMMenu;