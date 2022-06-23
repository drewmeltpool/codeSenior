import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { IDropdown } from 'src/types/IDropdown';
import Button from '../Button';
import { DropdownContext } from './DropdownContext';

const Dropdown: React.FC<IDropdown> = ({ controller, className, children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <DropdownContext.Provider value={{ handleClose }}>
      <div className={classNames('dropdown', className)}>
        <Button onClick={() => setOpen((prev) => !prev)} title={controller} />
        {isOpen && (
          <div className="dropdown-overlay" onClick={handleClose}>
            <div onClick={(e) => e.stopPropagation()} className="dropdown-menu">
              {children}
            </div>
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
