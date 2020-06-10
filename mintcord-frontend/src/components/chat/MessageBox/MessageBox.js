import React from 'react';

import styles from './MessageBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const createTimeStamp = (time) => time.slice(11,19).split(':');

const MessageBox = ({ chatlog }) => {
	const { senderId, messageContent } = chatlog;
	const [hour, minute, second] = createTimeStamp(chatlog.createdAt);

	return (
		<div className={cx('message-box')}>
			<div className={cx('user-icon')}>
				<img src="/favicon.ico" alt="user icon"/>
			</div>
			<div className={cx('chat-content')}>
				<div className={cx('chat-info')}>
					<div className={cx('user')}> {senderId} </div>
					<div className={cx('time-stamp')}> {hour}:{minute}:{second} </div>
				</div>
				<div className={cx('chat-message')}> {messageContent} </div>
			</div>
		</div>
	);
}

export default MessageBox; 