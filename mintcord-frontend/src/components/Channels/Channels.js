import React, { Component } from 'react';
import styles from './Channels.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Channels extends Component {
	render() {
		return (
			<div className={cx('channels')}>
				<div className={cx('header')}>
					Channel header
				</div>
				<div className= {cx('content')}>
					Channel list
				</div>
			</div>
		);
	}
}

export default Channels;