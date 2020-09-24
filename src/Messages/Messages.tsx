import React from 'react';
import './messages.scss';

export const Messages = () => {
  const messages = [
    { value: 'hello' },
    { value: 'example' },
    { value: 'just a test' },
  ];

  return (
    <ul className='messages'>
      {messages.map((message, i) => (
        <li key={i} className='messages-item'>
          {message.value}
        </li>
      ))}
    </ul>
  );
};
