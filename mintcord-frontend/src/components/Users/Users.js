import React, { Component } from 'react';
import styles from './Users.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Users extends Component {
	render() {
		return (
			<div className={cx('users')}>
				<div className={cx('header')}>
					User header
				</div>
				<div className= {cx('content')}>
					User list
				</div>
			</div>

		);
	}
}

export default Users;