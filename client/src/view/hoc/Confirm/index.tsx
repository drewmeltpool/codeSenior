import React, { useMemo, useRef, useState } from 'react';
import Button from 'src/view/common/Button';
import Flex from 'src/view/common/Flex';
import { Modal, useModal } from 'src/view/common/Modal';
import Typography from 'src/view/common/Typography';
import { ConfirmContext } from './ConfirmContext';

export const Confirm: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useModal(false);
  const [title, setTitle] = useState('');

  const confirm = useRef<any>();

  const handleModal = useMemo(
    () => (state: boolean) => () => setOpen(state),
    [setOpen]
  );

  const value = useMemo(
    () => ({
      handleOpen: (title: string, cb: () => void) => {
        confirm.current = () => {
          setOpen(false);
          cb();
        };
        setTitle(title);
        setOpen(true);
      },
    }),
    [setOpen]
  );

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      <Modal size="s" isOpen={isOpen} closeModal={handleModal(false)}>
        {() => (
          <div className="modal-box">
            <Typography title={title} variant="body1" />
            <Flex gap="14px" wrap="wrap" justify="center">
              <Button title="Yes" variant="primary" onClick={confirm.current} />
              <Button
                title="No"
                variant="outline-primary"
                onClick={handleModal(false)}
              />
            </Flex>
          </div>
        )}
      </Modal>
    </ConfirmContext.Provider>
  );
};
