import Input from '../components/Input';
import { useFieldContext } from './context/field';

export default function PasswordInput() {
  const [value, setValue] = useFieldContext();

  return (
    <Input
      type='password'
      placeholder='password'
      value={value}
      onChange={(event) => {
        setValue((prevState) => ({
          ...prevState,
          password: event.target.value,
        }));
      }}
    />
  );
}
