import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './ChannelList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ChannelList = ({ history }) => {
  const handleClick = (to) => {
    history.push(to);
  }

  return (
    <div className={cx('channel-list')}>
      <MainItem to='/dev/DM/main' onClick={handleClick} />
      <hr/>
      <ChannelItem />
      <ChannelItem unread />
      <ChannelItem />
      <ChannelItem to='/dev/game' onClick={handleClick} />
    </div>
  );
};

const MainItem = ({ unread, to, onClick}) => {
  return (
    <div className={cx('channel-item')}>
      <div className={cx('selector', { unread })}></div>
      <img src="/main-icon.png" alt="" onClick={() => onClick(to)}/>
    </div>
  );
}

const ChannelItem = ({ unread, to, onClick}) => {
  return (
    <div className={cx('channel-item')}>
      <div className={cx('selector', { unread })}></div>
      <img src="/mymint.png" alt="" onClick={() => onClick(to)}/>
    </div>
  );
};

export default withRouter(ChannelList);