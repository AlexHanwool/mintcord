import React from 'react';

import styles from './DMFriendsList.scss';
import classNames from 'classnames/bind';

import DMFriendCard from 'components/app/directMessage/DMFriendCard';

const cx = classNames.bind(styles);

const dummyFriendsList = [
  {
  nickname: 'dummyNick01',
  userId: '0001',
  // userStatus: 'online',
  },
  {
    nickname: 'dummyNick02',
    userId: '0002',
    // userStatus: 'online',
  },
  {
    nickname: 'dummyNick03',
    userId: '0003',
    // userStatus: 'online',
  },
];

const DMFriendsList = ({ friendsList }) => {

  const friendsCardList = dummyFriendsList.map((friend) => 
    <DMFriendCard
      key={friend.userId}
      friend={friend}
    />
  );

  return (
    <div className={cx('dm-friends-list')}>
      {friendsCardList}
    </div>
  );
};

export default DMFriendsList;