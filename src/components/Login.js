import React, { useContext, useState } from 'react';

import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { StoreContext } from '../context/store';

export default function Login() {
  const { actions } = useContext(StoreContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button onClick={() => actions.authSubmit(email, password)}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
