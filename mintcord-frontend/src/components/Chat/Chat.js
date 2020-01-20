import React, { Component } from 'react';

import styles from './Chat.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Chat extends Component {
	state = {
		message: '',
	};

  handleMessageChange = (event) => {
		this.setState({message: event.target.value});
	}
	
	onClickSend = () => {
		const { sendMessage } = this.props;
		
		if (!this.state.message) return;
		//sendMessage(this.state.message);
		this.setState({ message: '' });
	}
	
	render() {	
		const { handleMessageChange, onClickSend } = this;

		return (
			<div className={cx('chat')}>
				<div className={cx('chat-log')}>
					chat log
				</div>
				<input
					type='text'
					placeholder='message...'
					value={this.state.message}
					onChange={handleMessageChange}
				/>
				<button onClick={onClickSend}>Send</button>
			</div>
		);
	}
}

export default Chat;