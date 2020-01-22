import React from 'react';

import styles from './ChannelList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const tempChannelList = [
  {
    channelName: "mint",
    channelId: 11111111,
  },
  {
    channelName: "cord",
    channelId: 22222222,
  },
  {
    channelName: "channel",
    channelId: 33333333,
  }
];

const ChannelList = () => {
  
  return (
    <div className={cx('channel-list')}>
      main
      <hr/>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </div>
  );
};

const ChannelItem = ({ channelName, channelId }) => {

  return (
    <div className={cx('channel-item')}>
      <div className={cx('unread')}></div>
      <img src="/main-icon.png" />
    </div>
  );
};

export default ChannelList;