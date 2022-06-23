import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICollapse } from 'src/types';

import cn from 'classnames';

const Collapse: React.FC<ICollapse> = ({
  icon,
  title,
  helpers,
  children,
  visible = false,
  className,
  onClick,
}) => {
  const [isOpen, setOpen] = useState<boolean>(visible);

  const collapseState = onClick ? visible : isOpen;

  const handleClick = (flag: boolean) => () =>
    onClick ? onClick(flag) : setOpen(flag);

  return (
    <div
      className={cn(
        'collapse',
        `collapse--${collapseState ? 'open' : 'closed'}`,
        className
      )}
    >
      <div className="collapse-header" onClick={handleClick(!isOpen)}>
        <div className="collapse-title">{title}</div>
        {helpers && (
          <div
            className="collapse-helpers"
            onClick={(e) => e.stopPropagation()}
          >
            {helpers}
          </div>
        )}
        {icon && (
          <div className="collapse-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>

      {collapseState && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
