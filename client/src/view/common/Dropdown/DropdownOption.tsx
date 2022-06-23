import React, { useCallback, useContext } from 'react';
import cn from 'classnames';
import { DropdownContext } from './DropdownContext';

interface IDropdownOption {
  title?: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const DropdownOption: React.FC<IDropdownOption> = ({
  title,
  onClick,
  children,
  className,
}) => {
  const { handleClose } = useContext(DropdownContext);

  const handleClick = useCallback(() => {
    onClick?.();
    handleClose();
  }, []);

  return (
    <div onClick={handleClick} className={cn('dropdown-option', className)}>
      {title || children}
    </div>
  );
};

export default DropdownOption;
