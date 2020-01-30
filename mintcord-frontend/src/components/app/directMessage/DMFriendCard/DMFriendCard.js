import React, { useState } from 'react';

import styles from './DMFriendCard.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const DMFriendCard = ({ friend }) => {

  const [ isHover, setIsHover ] = useState(false);
  const { nickname, userId } = friend;
  // TODO: get userIcon from userId?

  const toggleMenu = (event) => {
    setIsHover(!isHover);
  }

  const menuButtonSet = isHover?
    <>
      <Button theme="circle">Me</Button>
      <Button theme="circle">Ca</Button>
      <Button theme={["circle", "hover-red"]}>Rm</Button>
    </>
    : null;

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
        {menuButtonSet}
      </div>
    </div>
  );
};

export default DMFriendCard;