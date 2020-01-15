import React, { Component } from 'react';

import styles from './Template.scss';
import classNames from 'classnames/bind';

import Users from 'components/Users';
import Channels from 'components/Channels';

const cx = classNames.bind(styles);

class Template extends Component {
	
	state = {
		side: 'closed',
	}
	
	toggleSidebar = () => {
		this.setState({
			// TODO: try boolean type var onSide
			side: this.state.side === 'open' ? 'closed' : 'open'
		});
	}
	
	render() {
		return (
			<div className={cx('main-template')}>
				<div className={cx('left', this.state.side )}>
					<div className= {cx('icon')}
						onClick={this.toggleSidebar} >
						&equiv;
					</div>
					
					<div className={cx('sidebar', this.state.side)}>
						<div className={cx('row')}>
							<div className={cx('column')}>
								<div className={cx('header')}>
									<h3 className={cx('title', this.state.side)}>
										Channel header
									</h3>
								</div>
								<div className= {cx('content')}>
									<Channels />
								</div>
							</div>
							<div className={cx('column')}>
								<div className={cx('header')}>
								<h3 className={cx('title', this.state.side)}>
									User header
								</h3>
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
					<h3 className={cx('title', this.state.side)}>
						Main header
					</h3>
				</div>
				<div className= {cx('content')}>
					<div> <h3> Main content </h3> </div>
					<div> <p> Chat Area </p> </div>
					<div> a deserunt mollit anim id est laborum. </div>
				</div>
			</div>
		</div>
		);
	}
}

export default Template;