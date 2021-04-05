import React from 'react';
import SignInDialog from 'components/Dialog/SignInDialog';
import SignUpDialog from 'components/Dialog/SignUpDialog';
import StyledModal from './Modal.styled';

export default function Modal({ onClose, modalType }) {
  console.log(SignUpDialog);
  return (
    <StyledModal>
      {modalType === 'login' ? (
        <SignInDialog onClose={onClose} />
      ) : (
        <SignUpDialog onClose={onClose} />
      )}
    </StyledModal>
  );
}
