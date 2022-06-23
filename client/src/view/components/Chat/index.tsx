import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '../../common/Button';
import FlatList from '../../common/FlatList';
import Former from '../../common/Former';
import ChatUser from './ChatUser';
import ChatMessage from './ChatMessage';

const imageURL =
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80';

const rooms = [
  {
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
    name: 'Nazar Sheva1',
    conversation: [
      { message: 'Hi', own: true },
      { message: 'Hi asd asd' },
      { message: 'Hi', own: true },
      { message: 'Hia sda sd asd asd asd' },
      { message: 'Hi', own: true },
      { message: 'Hi', own: true },
      { message: 'Hi asd asd' },
      { message: 'Hi', own: true },
      { message: 'Hia sda sd asd asd asd' },
      { message: 'Hi', own: true },
      { message: 'Hi', own: true },
      { message: 'Hi asd asd' },
      { message: 'Hi', own: true },
      { message: 'Hia sda sd asd asd asd' },
      { message: 'Hi', own: true },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
    name: 'Nazar Sheva2',
    conversation: [],
  },
  {
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
    name: 'Nazar Sheva3',
    conversation: [
      { message: 'Hia sda sd asd asd asd' },
      { message: 'Hi', own: true },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
    name: 'Nazar Sheva4',
    conversation: [
      { message: 'Hi', own: true },
      { message: 'Hi', own: true },
    ],
  },
];

const Chat: React.FC = () => {
  const [chat, setChat] = useState<{ conversation: Array<any>; name: string }>({
    conversation: [],
    name: '',
  });

  const handleClick = (d: any) => () => setChat(d);
  const handleSubmit = (_: any, { resetForm }: any) => {
    resetForm();
  };

  return (
    <div className="chat">
      <FlatList
        className="chat-user-list"
        itemClassName="chat-user"
        isWrapComponent
        data={rooms}
        setKey={({ name }, idx) => idx + name}
        component={({ name, image, conversation }) => (
          <ChatUser
            active={name === chat.name}
            onClick={handleClick({ conversation, name })}
            name={name}
            image={image}
          />
        )}
      />
      <div className="chat-conversation-wrapper">
        <FlatList
          data={chat.conversation}
          setKey={(_, idx) => idx}
          component={({ message, own }) => (
            <ChatMessage
              message={message}
              own={!!own}
              author={{ name: 'kee', image: imageURL }}
            />
          )}
          className="chat-conversation"
        />
        <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
          <Form className="chat-conversation-form form">
            <Former.Input name="message" className="form__input" />
            <Button type="submit" variant="outline-primary" title="Send" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Chat;
