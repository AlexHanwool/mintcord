import React, { Component } from 'react';

import styles from './Template.scss';
import classNames from 'classnames/bind';

import Users from 'components/Users';
import Channels from 'components/Channels';

const cx = classNames.bind(styles);

class Template extends Component {
	
	state = {
		onSide: true
	}
	
	toggleSidebar = () => {
		this.setState({
			onSide: !this.state.onSide
		});
	}
	
	render() {
		const { onSide } = this.state;
		return (
			<div className={cx('template')}>
				<div className={cx('left', { onSide } )}>
					<div className= {cx('icon')}
						onClick={this.toggleSidebar} >
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
						<div> Chat area </div>
						<div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Template;