import React, { useState } from 'react';

import styles from './DMFriendCard.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';
import { RemoveIcon, MessageIcon, CallIcon } from 'icons';

const cx = classNames.bind(styles);

const DMFriendCard = ({ friend, onClickChat, onClickRemove }) => {

  const [ isHover, setIsHover ] = useState(false);
  const { nickname, userId } = friend;
  // TODO: save personal icon at friend object

  const handleHover = (isEnter) => {
    setIsHover(isEnter);
  }

  const menuButtonSet = isHover?
    <>
      <Button theme="circle" onClick={onClickChat}><MessageIcon /></Button>
      <Button theme="circle"><CallIcon /></Button>
      <Button theme={["circle", "hover-red"]} onClick={() => onClickRemove(friend)}><RemoveIcon /></Button>
    </>
    : null;

  return (
    <div className={cx('friend-card')}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className={cx('friend-icon')}>
        <img src="/icons/icon-person-anon.png" alt="" />
      </div>
      <div className={cx('friend-name')}>
        {nickname}
        {isHover? <span>#{userId}</span> : null}
      </div>
      <div className={cx('friend-menu')}>
        {menuButtonSet}
      </div>
    </div>
  );
};

export default DMFriendCard;