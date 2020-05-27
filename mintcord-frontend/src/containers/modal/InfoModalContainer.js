import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/modules/base';

import InfoModal from 'components/common/modal/InfoModal';

const InfoModalContainer = () => {
  const visible = useSelector(({ base }) => base.modal.info);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(hideModal('info'));
  }

  return (
    <InfoModal visible={visible} onConfirm={handleConfirm}/>
  );
}

export default InfoModalContainer;