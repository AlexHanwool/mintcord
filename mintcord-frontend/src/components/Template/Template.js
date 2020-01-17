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
							<div className={cx('column')}>
								<div className={cx('header')}>
									<h3> Channel header </h3>
								</div>
								<div className= {cx('content')}>
									<Channels />
								</div>
							</div>
							<div className={cx('column')}>
								<div className={cx('header')}>
								<h3> User header </h3>
							</div>
							<div className= {cx('content')}>
								<Users />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className={cx('header')}>
					<h3> Main header </h3>
				</div>
				<div className= {cx('content')}>
					<h3> Main content </h3>
					<p> Chat Area </p>
					<div> a deserunt mollit anim id est laborum. </div>
				</div>
			</div>
		</div>
		);
	}
}

export default Template;