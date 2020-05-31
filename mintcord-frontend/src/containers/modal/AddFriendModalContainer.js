import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/modules/base';

import AddFriendModal from 'components/common/modal/AddFriendModal';

import { addFriend } from 'store/modules/user';

const AddFriendModalContainer = () => {
  const [target, setTarget ] = useState('');
  const visible = useSelector(({ base }) => base.modal.addFriend);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (target) {
      const [targetNick, targetId] = target.split('#');
      if (targetNick && targetId) {
        dispatch(addFriend({ targetNick, targetId }));
      }
      else console.log('please check your input');
    }
    else {
      console.log('please input nickname#id');
    }
    setTarget('');
    dispatch(hideModal('addFriend'));
  }
  const handleCancel = () => {
    setTarget('');
    dispatch(hideModal('addFriend'));
  }
  const handleTarget = (event) => {
    setTarget(event.target.value);
  }

  return (
    <AddFriendModal
      visible={visible}
      onAdd={handleAdd}
      onCancel={handleCancel}
      onChange={handleTarget}
    />
  );
};

export default AddFriendModalContainer;