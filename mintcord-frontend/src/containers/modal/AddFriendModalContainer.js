import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/modules/base';

import AddFriendModal from 'components/common/modal/AddFriendModal';

const AddFriendModalContainer = () => {
  const visible = useSelector(({ base }) => base.modal.addFriend);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(hideModal('addFriend'));
  }
  const handleCancel = () => {
    dispatch(hideModal('addFriend'));
  }

  return (
    <AddFriendModal
      visible={visible}
      onAdd={handleAdd}
      onCancel={handleCancel}
    />
  );
};

export default AddFriendModalContainer;