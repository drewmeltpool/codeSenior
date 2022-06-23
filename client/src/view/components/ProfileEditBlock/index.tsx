import classNames from 'classnames';
import React from 'react';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';

interface IProfileEditBlock {
  onClick?: () => void;
  className?: string;
}

const ProfileEditBlock: React.FC<IProfileEditBlock> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <div className={classNames('profile-edit-block', className)}>
      <div className="profile-edit-content">{children}</div>
      <Button className="profile-edit-btn" onClick={onClick} variant="dark">
        {/* <Text tag="span" title="Edit" /> */}
        <Icon icon="pen" size="lg" />
      </Button>
    </div>
  );
};

export default ProfileEditBlock;
