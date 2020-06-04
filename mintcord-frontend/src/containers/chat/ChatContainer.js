import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

import ChatBoard from 'components/chat/ChatBoard';

const dummyChatLogs = [{ sender: 'system', message: 'hello, mint chat!' }];

const ChatContainer = () => {
  const [message, setMessage ] = useState('');
  // const { chatLogs } = useSelector(({ chat }) => chat.chatLogs);

  const handleClickSend = () => {
    console.log(`send ${message}`);
  }
  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  return (
    <ChatBoard
      chatLogs={dummyChatLogs}
      onChangeMessage={handleMessage}
      onClickSend={handleClickSend}
    />
  );
}

export default ChatContainer;