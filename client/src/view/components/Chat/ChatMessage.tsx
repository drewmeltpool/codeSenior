import React from 'react';
import classnames from 'classnames';
import Image from '../../common/Image';

interface IAuthProps {
  image: string;
  name: string;
}

interface IProps {
  own: boolean;
  message: string;
  author: IAuthProps;
}

const ChatMessage: React.FC<IProps> = ({ author, message, own }) => {
  return (
    <div className={classnames('chat-message', own && 'own')}>
      {!own && (
        <div className="chat-message-author">
          <Image
            src={author.image}
            className="chat-author-image-wrapper"
            imageClassName="chat-author-image"
          />
          <h6 className="chat-authot-name">{author.name}</h6>
        </div>
      )}
      <div className="chat-message-inner">
        <p className="chat-message-text">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
