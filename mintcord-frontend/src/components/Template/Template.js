import React, { Component } from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Layout extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			side: 'closed',
		}
	}
	
	toggleSidebar = (event) => {
		this.setState({
			// Onside: !Onside TODO Chage
			side: this.state.side === 'open' ? 'closed' : 'open'
		});
	}
	
	render() {
		return (
			<div className={cx('Template')}>
				<main>
					<div className={cx('left', this.state.side )}>
						<div className= {cx('icon')}
							onClick={this.toggleSidebar} >
							&equiv;
						</div>
						
						<div className={cx('sidebar', this.state.side)}>
							<div className={cx('header')}>
								<h3 className={cx('title', this.state.side)}>
									Side header
								</h3>
							</div>
							<div className= {cx('content')}>
								<div> <h3> Side content </h3> </div>
								<div> <p> User list </p> </div>
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
				</main>
			</div>
		);
	}
}

export default Layout;