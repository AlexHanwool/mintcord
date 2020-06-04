import React from 'react';

import styles from './ChatBoard.scss';
import classNames from 'classnames/bind';

import MessageBox from 'components/chat/MessageBox';

const cx = classNames.bind(styles);

const ChatBoard = (props) => {
	const { chatLogs } = props;
	const { onChangeMessage, onClickSend } = props;

	const dummyDate = new Date();
	const createTimestamp = (date) =>
		(date.getHours()) + ":" + date.getMinutes() + ":" + date.getSeconds();

	const logList = chatLogs.map((chatlog, index) => {
		return (
			<MessageBox
				key={index}
				log={chatlog}
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
				onChange={onChangeMessage}
			/>
			<button onClick={onClickSend}> Send </button>
		</div>
	);
}

export default ChatBoard;