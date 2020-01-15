import React from 'react';
import styles from './Users.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Users extends React.Component {
	render() {
		return (
			<div className={cx('Users')}>
				<div> <h3> User content </h3> </div>
				<div> <p> User list </p> </div>
			</div>
		);
	}
}

export default Users;