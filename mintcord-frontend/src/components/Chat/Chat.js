import React, { useState } from 'react';

import styles from './Chat.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Chat = () => {
	
	// TODO: apply redux, cuz we have to store message until send
	const [ message, setMessage ] = useState('');
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	}

	return (
		<div className={cx('chat')}>
			<div className={cx('chat-log')}>
				chat log
			</div>
			<input
				type='text'
				placeholder='message...'
				value={message}
				onChange={handleMessageChange}
			/>
			<button>Send</button>
		</div>
	);
}

export default Chat;