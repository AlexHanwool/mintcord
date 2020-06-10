import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChatBoard from 'components/chat/ChatBoard';
import { sendMessage, getChatLogs } from 'store/modules/chat';

const ChatContainer = ({ receiverId }) => {
  const userId = useSelector(({ user }) => user.user? user.user.userId : null);
  const chatLogs = useSelector(({ chat }) => chat[receiverId]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chatLogs) {
      console.log(chatLogs);
      dispatch(getChatLogs(receiverId));
    }
  }, [dispatch, chatLogs, receiverId]);

  const handleClickSend = (message) => {
    const payload = {
      senderId: userId,
      receiverId,
      message
    }
    dispatch(sendMessage(payload));
  }

  return (
    <>
    {chatLogs? 
      <ChatBoard
        chatLogs={chatLogs}
        onClickSend={handleClickSend}
      /> : null}
    </>
  );
}

export default ChatContainer;