import React from 'react';

import styles from './ChannelList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ChannelList = () => {
  
  return (
    <div className={cx('channel-list')}>
      main
      <hr/>
      <ChannelItem />
      <ChannelItem unread/>
      <ChannelItem />
    </div>
  );
};

const ChannelItem = ({ channelName, channelId, unread }) => {

  return (
    <div className={cx('channel-item')}>
      <div className={cx('selector', { unread })}></div>
      <img src="/main-icon.png" alt="" />
    </div>
  );
};

export default ChannelList;