import React, { useState } from 'react';

import styles from './DMFriendCard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DMFriendCard = ({ friend }) => {

  const [ isHover, setIsHover ] = useState(false);
  const { nickname, userId } = friend;
  // TODO: get userIcon from userId?

  const toggleMenu = (event) => {
    setIsHover(!isHover);
  }

  return (
    <div className={cx('friend-card')}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <div className={cx('friend-icon')}>
        <img src="/icons/icon-person-anon.png" />
      </div>
      <div className={cx('friend-name')}>
        {nickname}#<span>{userId}</span>
      </div>
      <div className={cx('friend-menu')}>
        {isHover? <button>hover!</button> : null}
      </div>
    </div>
  );
};

export default DMFriendCard;