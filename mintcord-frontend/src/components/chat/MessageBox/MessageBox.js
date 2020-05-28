import React from 'react';

import styles from './MessageBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MessageBox = ({ me, time, log }) => {

	const { sender, message } = log;
	return (
		<div className={cx('message-box')}>
			<div className={cx('user-icon')}>
				<img src="/favicon.ico" alt="temp icon"/>
			</div>
			<div className={cx('chat-content')}>
				<div className={cx('chat-info')}>
					<div className={cx('user')}> {sender} </div>
					<div className={cx('time-stamp')}> {time} </div>
				</div>
				<div className={cx('chat-message')}> {message} </div>
			</div>
		</div>
	);
}

export default MessageBox; 