import React from 'react';
import classnames from 'classnames';
import Button from '../../common/Button';
import Image from '../../common/Image';

interface IProps {
  active: boolean;
  onClick: () => void;
  name: string;
  image: string;
}

const ChatUser: React.FC<IProps> = ({ active, name, image, onClick }) => {
  return (
    <Button
      className={classnames('chat-btn', active && 'chat-btn--active')}
      onClick={onClick}
    >
      <Image
        className="chat-image-wrapper"
        imageClassName="chat-image"
        src={image}
      />
      <p className="chat-name">{name}</p>
    </Button>
  );
};

export default ChatUser;
