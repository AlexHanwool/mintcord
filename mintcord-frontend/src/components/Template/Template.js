import React, { useState } from 'react';

import styles from './Template.scss';
import classNames from 'classnames/bind';

import Users from 'components/Users';
import Channels from 'components/Channels';
import Chat from 'components/Chat';

const cx = classNames.bind(styles);

const Template = () => {
	
	const [onSide, setOnSide ] = useState(true);
	const toggleSidebar = () => {
		setOnSide(!onSide);
	}
	
	return (
		<div className={cx('template')}>
			<div className={cx('left', { onSide } )}>
				<div className= {cx('icon')}
					onClick={toggleSidebar} >
					&equiv;
				</div>
				<div className={cx('sidebar', { onSide } )}>
					<div className={cx('row')}>	
						<Channels />
						<Users />
					</div>
				</div>
			</div>
		
			<div>
				<div className={cx('header')}>
					Main header
				</div>
				<div className= {cx('content')}>
					<Chat />
				</div>
			</div>
		</div>
	);
}

export default Template;