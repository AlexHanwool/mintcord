import React from 'react';
import styles from './Channels.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Channels extends React.Component {
	render() {
		return (
			<div className={cx('Channels')}>
				<div> <h3> Channel content </h3> </div>
				<div> <p> Temporary Channel 1 </p> </div>
				<div> <p> Temporary Channel 2 </p> </div>
			</div>
		);
	}
}

export default Channels;