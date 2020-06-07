import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './DMChat.scss';
import classNames from 'classnames/bind';

import ChatContainer from 'containers/chat/ChatContainer';
import { getChatLogs } from 'store/modules/chat';

const cx = classNames.bind(styles);

const DMChat = ({ match }) => {
  const chatLogs = useSelector(({ chat }) => chat[match.params.userId]);
  const dispatch = useDispatch();

  // const chatapp = null;

  useEffect(() => {
    console.log(chatLogs);
    if (!chatLogs) {
      dispatch(getChatLogs());
    }
  }, [dispatch, chatLogs]);

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