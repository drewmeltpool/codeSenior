import React from 'react';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import { Modal } from 'src/view/common/Modal';
import Title from 'src/view/common/Title';

interface IModalEdit {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}

const ModalEdit: React.FC<IModalEdit> = ({
  title,
  children,
  isOpen,
  handleClose,
}) => {
  return (
    <Modal size="m" isCloseOnOverlay isOpen={isOpen} closeModal={handleClose}>
      {() => (
        <>
          <Button
            onClick={handleClose}
            rounded
            className="edit-modal-btn"
            title={<Icon icon="times" size="lg" />}
          />
          <div className="modal-box">
            <Title title={title} variant="medium" />
            {children}
          </div>
        </>
      )}
    </Modal>
  );
};

export default ModalEdit;

export interface IEditModal<T> {
  data: T;
  isOpen: boolean;
  handleClose: () => void;
}
