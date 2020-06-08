import React, { useState } from 'react';

import styles from './ChatBoard.scss';
import classNames from 'classnames/bind';

import MessageBox from 'components/chat/MessageBox';

const cx = classNames.bind(styles);

const ChatBoard = (props) => {
	// TODO: using useRef to move message state upper
	const [ message, setMessage ] = useState('');
	const { chatLogs, onClickSend } = props;

	// const dummyDate = new Date();
	// const createTimestamp = (date) =>
	// 	(date.getHours()) + ":" + date.getMinutes() + ":" + date.getSeconds();

	const handleClickSend = () => {
		onClickSend(message);
		setMessage('');
	}

	const handleMessage = (event) => {
		setMessage(event.target.value);
	}

	const logList = chatLogs.map((chatlog, index) => {
		return (
			<MessageBox
				key={index}
				chatlog={chatlog}
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
				onChange={handleMessage}
			/>
			<button onClick={handleClickSend}> Send </button>
		</div>
	);
}

export default ChatBoard;