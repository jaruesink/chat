import React from 'react';
import { ButtonPrimary, Form, InputText } from '@lambdacurry/component-library';
import { Card } from '@material-ui/core';
import './login.scss';

export const Login = () => {
  return (
    <Card className='login'>
      <Form
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={() => {}}
      >
        {(formikProps) => (
          <>
            <InputText
              name='username'
              label='Username'
              formikProps={formikProps as any}
            />
            <InputText
              name='password'
              label='Password'
              formikProps={formikProps as any}
            />
            <ButtonPrimary type='submit'>Login</ButtonPrimary>
          </>
        )}
      </Form>
    </Card>
  );
};
