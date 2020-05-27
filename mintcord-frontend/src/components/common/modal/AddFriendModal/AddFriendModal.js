import React from 'react';

import styles from './AddFriendModal.scss';
import classNames from 'classnames/bind';

import ModalWrapper from 'components/common/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AddFriendModal = ({ visible, onAdd, onCancel }) => (
  <ModalWrapper visible={visible}>
    <div className={cx('add-friend')}>
      <div className={cx('title')}></div>
      <div className={cx('description')}>
        <input
          type='text'
          placeholder="nickname#0000"
        />
      </div>
    </div>
    <div className={cx('options')}>
      <Button onClick={onAdd}>Add</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  </ModalWrapper>
);

export default AddFriendModal;