import React, { useState } from 'react';

import Form from '../components/Form';
import Input from '../components/Input';

type FormState = {
  email: string;
  password: string;
};

export default function BasicForm() {
  const [formState, setFormState] = useState<FormState>({ email: '', password: '' });

  return (
    <Form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
      }}
    >
      <h1>Basic Form</h1>

      <Input
        type='text'
        placeholder='email'
        value={formState.email}
        onChange={(event) =>
          setFormState((prevState) => ({
            ...prevState,
            email: event.target.value,
          }))
        }
      />

      <Input
        type='password'
        placeholder='password'
        value={formState.password}
        onChange={(event) =>
          setFormState((prevState) => ({
            ...prevState,
            password: event.target.value,
          }))
        }
      />

      <button type='submit'>Submit</button>
    </Form>
  );
}
