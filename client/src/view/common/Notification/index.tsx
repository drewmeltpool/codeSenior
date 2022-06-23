import React from 'react';

import { useToast } from 'src/view/hooks/useToast';

import {
  faCheckCircle,
  faExclamationTriangle,
  faInfo,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Typography from '../Typography';

import classNames from 'classnames';
import './notification.scss';

const notificationIcon = {
  info: faInfo,
  warning: faExclamationTriangle,
  error: faCircleExclamation,
  success: faCheckCircle,
};

export type NotificationType = 'success' | 'warning' | 'error' | 'info';

export interface IProps {
  id: any;
  type: NotificationType;
  text: string | React.ReactNode;
}

const Notification: React.FC<IProps> = ({ type, text, id }) => {
  const { remove } = useToast();
  const icon = notificationIcon[type];

  return (
    <div
      className={classNames('notification', `notification--${type}`)}
      onClick={() => remove(id)}
    >
      <div className="notification-box">
        <Icon icon={icon} color="inherit" className="notification-icon" />
        <Typography variant="body1" title={text} />
      </div>
    </div>
  );
};

export default Notification;
