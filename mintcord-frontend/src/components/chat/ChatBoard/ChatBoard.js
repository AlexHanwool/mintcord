import React, { useState } from 'react';

import styles from './ChatBoard.scss';
import classNames from 'classnames/bind';

import MessageBox from 'components/chat/MessageBox';

const cx = classNames.bind(styles);
const createTimestamp = (date) =>
	(date.getMonth()+1) + "월" + date.getDate() + "일" + date.getSeconds();

const ChatBoard = ({socketid, users, chatLogs, handleSendMessage}) => {
	
	// TODO: apply redux, cuz we have to store message until send
	const [message, setMessage ] = useState('');

	const dummyDate = new Date();

	const onClickButton = () => {
		handleSendMessage(message);
		setMessage('');
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const logList = chatLogs.map((log, index) => {
		return (
			<MessageBox
				key={index}
				me = {socketid === log.sender? true : false}
				log={log}
				time={createTimestamp(dummyDate)}
				/>
		);
	});

	return (
		<div className={cx('chat-board')}>
			<div className={cx('chat-log')}>
				{logList}
			</div>
			<input
				type='text'
				placeholder='message...'
				value={message}
				onChange={handleMessageChange}
			/>
			<button onClick={onClickButton}> Send </button>
		</div>
	);
}

export default ChatBoard;