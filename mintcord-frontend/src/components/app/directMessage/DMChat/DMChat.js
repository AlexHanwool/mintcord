import React from 'react';

import styles from './DMChat.scss';
import classNames from 'classnames/bind';
import ChatContainer from '../../../../containers/chat/ChatContainer';

const cx = classNames.bind(styles);

const DMChat = ({ match }) => {

  return (
    <div className={cx('dm-chat-area')}>
      <div className={cx('header')}>
        {match.params.userId}
      </div>
      <div>
        <ChatContainer />
      </div>
    </div>
  );
};

export default DMChat;