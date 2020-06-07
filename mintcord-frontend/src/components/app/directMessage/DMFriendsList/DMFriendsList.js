import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './DMFriendsList.scss';
import classNames from 'classnames/bind';

import DMFriendCard from 'components/app/directMessage/DMFriendCard';
import { getFriendsList, removeFriend } from 'store/modules/user';

const cx = classNames.bind(styles);

const DMFriendsList = ({ history }) => {
  const [friendsCardList, setFriendsCardList] = useState([]);
  const { auth, friendsList } = useSelector(({ auth, user }) => {
    return {
      auth: auth.auth,
      friendsList: user.friendsList
      // [{nickname:'dummyNick01',userId:'0001'}]; userStatus:'online'?
    };
  });
  const { addLoading, removeLoading } = useSelector(({ loading }) => {
    return {
      addLoading: loading['user/ADD_FRIEND'],
      removeLoading: loading['user/REMOVE_FRIEND']
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth)
      dispatch(getFriendsList());
  }, [auth, dispatch]);

  useEffect(() => {
    setFriendsCardList(friendsList.map((friend) => 
      <DMFriendCard
        key={friend.userId}
        friend={friend}
        onClickChat={handleChat}
        onClickRemove={handleRemove}
        />
    ));
  }, [friendsList]);

  useEffect(() => {
    if (removeLoading === false || addLoading === false)
      dispatch(getFriendsList());
  }, [removeLoading, addLoading, dispatch]);

  const handleRemove = (target) => {
    dispatch(removeFriend({targetNick: target.nickname, targetId: target.userId}));
  }

  const handleChat = (targetId) => {
    console.log('go to direct message page');
    history.push(`/dev/DM/@${targetId}`);
  }

  return (
    <div className={cx('dm-friends-list')}>
      {friendsCardList}
    </div>
  );
};

export default DMFriendsList;