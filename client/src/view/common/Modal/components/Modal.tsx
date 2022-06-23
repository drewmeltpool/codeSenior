import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import classNames from 'classnames';
import { IModal } from 'src/types';

interface IPropsBox {
  direction?: 'row' | 'column';
  align?: 'center' | 'start' | 'end' | 'between';
  className?: string;
}

interface IPropsTitle {
  className?: string;
}

interface IPropsBody {
  className?: string;
}

interface ICompound {
  Body: React.FC<IPropsBody>;
  Box: React.FC<IPropsBox>;
  Title: React.FC<IPropsTitle>;
}

const Modal: React.FC<IModal> & ICompound = ({
  size,
  isOpen,
  isCloseOnOverlay,
  closeModal,
  children,
}) => {
  const [modalState, setModalState] = useState(isOpen);

  const overlayHandler = isCloseOnOverlay ? closeModal : undefined;

  useEffect(() => {
    if (!isOpen) {
      setTimeout(setModalState, 300, false);
    } else {
      setModalState(true);
    }
  }, [isOpen]);

  return ReactDom.createPortal(
    <>
      {(isOpen || modalState) && (
        <div
          className={classNames(
            'modal__overlay',
            isOpen && modalState && 'active'
          )}
          onClick={overlayHandler}
        >
          <div
            className={classNames('modal', size && `modal--${size}`)}
            onClick={(e) => e.stopPropagation()}
          >
            {children({ closeModal })}
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal') as Element
  );
};

const ModalBox: React.FC<IPropsBox> = ({
  direction,
  align,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        'modal-box',
        direction && `modal__box--${direction}`,
        align && className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

ModalBox.defaultProps = {
  direction: 'column',
};

const ModalTitle: React.FC<IPropsTitle> = ({ children, className }) => {
  return <h4 className={classNames('modal__title', className)}>{children}</h4>;
};

const ModalBody: React.FC<IPropsTitle> = ({ children, className }) => {
  return <div className={classNames('modal__body', className)}>{children}</div>;
};

Modal.Body = ModalBody;
Modal.Box = ModalBox;
Modal.Title = ModalTitle;

export default Modal;
