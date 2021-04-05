import React from 'react';
import SignInDialog from 'components/Dialog/SignInDialog';
import SignUpDialog from 'components/Dialog/SignUpDialog';
import StyledModal from './Modal.styled';

export default function Modal({ onClose, modalType }) {
  return (
    <StyledModal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {modalType === 'login' ? (
        <SignInDialog onClose={onClose} />
      ) : (
        <SignUpDialog onClose={onClose} />
      )}
    </StyledModal>
  );
}
