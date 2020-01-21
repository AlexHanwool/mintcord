import React from 'react';

import styles from './DMChat.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DMChat = () => {
  return (
    <div className={cx('dm-chat-area')}>
      DMChat
    </div>
  );
};

export default DMChat;