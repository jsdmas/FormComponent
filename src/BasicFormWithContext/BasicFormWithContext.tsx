import { FieldProvider } from './context/field';
import { FormProvider } from './context/form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

export default function BasicFormWithContext() {
  return (
    <FormProvider>
      <h1>Basic Form With Context</h1>

      <FieldProvider name='email'>
        <EmailInput />
      </FieldProvider>

      <FieldProvider name='password'>
        <PasswordInput />
      </FieldProvider>

      <button type='submit'>Submit</button>
    </FormProvider>
  );
}
