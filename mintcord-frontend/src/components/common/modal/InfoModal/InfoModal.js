import React from 'react';
import styles from './InfoModal.scss';
import classNames from 'classnames/bind';

import ModalWrapper from 'components/common/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const InfoModal = ({visible, onConfirm}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('information')}>
      <div className={cx('title')}>Information</div>
      <div className={cx('description')}></div>
    </div>
    <div className={cx('options')}>
      <Button theme='gray' onClick={onConfirm}>Ok</Button>
    </div>
  </ModalWrapper>
);

export default InfoModal;