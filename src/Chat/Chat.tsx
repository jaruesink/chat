import React from 'react';
import { ButtonPrimary, Form, InputText } from '@lambdacurry/component-library';
import { Card } from '@material-ui/core';
import './chat.scss';
import { Messages } from '../Messages/Messages';

export const Chat = () => {
  return (
    <Card className='chat'>
      <Messages />

      <Form
        initialValues={{
          chat: '',
        }}
        onSubmit={() => {}}
      >
        {(formikProps) => (
          <div className='chat-send-row'>
            <InputText
              name='chat'
              label='Enter message'
              formikProps={formikProps as any}
            />
            <ButtonPrimary type='submit'>Send</ButtonPrimary>
          </div>
        )}
      </Form>
    </Card>
  );
};
