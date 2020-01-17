import React, { Component } from 'react';
import styles from './Channels.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Channels extends Component {
	render() {
		return (
			<div className={cx('channels')}>
				<h3> Channel content </h3>
				<p> Temporary Channel 1 </p>
				<p> Temporary Channel 2 </p>
			</div>
		);
	}
}

export default Channels;