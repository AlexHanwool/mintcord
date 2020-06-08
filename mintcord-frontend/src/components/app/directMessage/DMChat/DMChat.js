import React from 'react';

import styles from './DMChat.scss';
import classNames from 'classnames/bind';

import ChatContainer from 'containers/chat/ChatContainer';

const cx = classNames.bind(styles);

const DMChat = ({ match }) => {
  const friendId = match.params.userId;
  // const chatapp = null;

  return (
    <div className={cx('dm-chat-area')}>
      <div className={cx('header')}>
        {friendId}
      </div>
      <div>
        <ChatContainer receiverId={friendId} />
      </div>
    </div>
  );
};

export default DMChat;